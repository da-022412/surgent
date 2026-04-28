#!/usr/bin/env tsx
/**
 * Syncs design tokens from src/app/globals.css → Figma Variables (REST API).
 * Idempotent: creates on first run, upserts on subsequent runs.
 *
 * Local:  npm run figma:sync
 * CI:     triggered automatically when globals.css changes on main
 */

import { readFileSync } from "fs";
import { join } from "path";

// Load .env.local for local dev (CI injects env vars directly)
try {
  for (const line of readFileSync(join(process.cwd(), ".env.local"), "utf-8").split("\n")) {
    const eq = line.indexOf("=");
    if (eq === -1 || line.trimStart().startsWith("#")) continue;
    const key = line.slice(0, eq).trim();
    if (!(key in process.env)) process.env[key] = line.slice(eq + 1).trim();
  }
} catch {}

const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_ID = process.env.FIGMA_FILE_ID;

if (!TOKEN || !FILE_ID) {
  console.error("Missing FIGMA_ACCESS_TOKEN or FIGMA_FILE_ID");
  process.exit(1);
}

// ─── OKLCH → sRGB ─────────────────────────────────────────────────────────────
// Figma Variables only accept sRGB {r,g,b,a} in 0–1 range.

function oklchToSrgb(l: number, c: number, h: number): [number, number, number] {
  // OKLCH → OKLab
  const a = c * Math.cos((h * Math.PI) / 180);
  const b = c * Math.sin((h * Math.PI) / 180);

  // OKLab → LMS (cube root space)
  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.291485548 * b;

  // LMS → Linear sRGB
  const lc = l_ ** 3, mc = m_ ** 3, sc = s_ ** 3;
  const toGamma = (x: number) =>
    x <= 0.0031308 ? 12.92 * x : 1.055 * x ** (1 / 2.4) - 0.055;
  const clamp = (x: number) => Math.max(0, Math.min(1, x));

  return [
    clamp(toGamma(4.0767416621 * lc - 3.3077115913 * mc + 0.2309699292 * sc)),
    clamp(toGamma(-1.2684380046 * lc + 2.6097574011 * mc - 0.3413193965 * sc)),
    clamp(toGamma(-0.0041960863 * lc - 0.7034186147 * mc + 1.7076147010 * sc)),
  ];
}

function parseOklch(raw: string): { r: number; g: number; b: number; a: number } | null {
  // Handles both oklch(40% 0.18 145) and oklch(0.4 0.18 145) and optional /alpha
  const m = raw.match(
    /oklch\(\s*([\d.]+)(%?)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?\s*\)/
  );
  if (!m) return null;
  const l = m[2] === "%" ? parseFloat(m[1]) / 100 : parseFloat(m[1]);
  const [r, g, b] = oklchToSrgb(l, parseFloat(m[3]), parseFloat(m[4]));
  return { r, g, b, a: m[5] !== undefined ? parseFloat(m[5]) : 1 };
}

// ─── CSS parsing ──────────────────────────────────────────────────────────────

function parseBlock(css: string, selectorRe: string): Record<string, string> {
  const block = css.match(new RegExp(`${selectorRe}\\s*\\{([\\s\\S]*?)\\}`))?.[1] ?? "";
  const out: Record<string, string> = {};
  for (const [, k, v] of block.matchAll(/--([\w-]+)\s*:\s*([^;]+);/g)) out[k] = v.trim();
  return out;
}

const css = readFileSync(join(process.cwd(), "src/app/globals.css"), "utf-8");
const lightProps = parseBlock(css, ":root");
const darkProps = parseBlock(css, "\\.dark");
const themeProps = parseBlock(css, "@theme\\s+inline");

type RgbaColor = { r: number; g: number; b: number; a: number };

// Color tokens — only those with parseable OKLCH values
const colorTokens: Record<string, { light: RgbaColor; dark: RgbaColor }> = {};
for (const name of new Set([...Object.keys(lightProps), ...Object.keys(darkProps)])) {
  const l = lightProps[name] ? parseOklch(lightProps[name]) : null;
  if (!l) continue;
  const d = darkProps[name] ? (parseOklch(darkProps[name]) ?? l) : l;
  colorTokens[name] = { light: l, dark: d };
}

// Radius tokens — from @theme inline, px values only
const radiusTokens: Record<string, number> = {};
for (const [k, v] of Object.entries(themeProps)) {
  if (!k.startsWith("radius-")) continue;
  const px = v.match(/^([\d.]+)px$/);
  if (px) radiusTokens[k] = parseFloat(px[1]);
}

console.log(
  `Parsed: ${Object.keys(colorTokens).length} color tokens, ${Object.keys(radiusTokens).length} radius tokens`
);

// ─── Figma REST API ───────────────────────────────────────────────────────────

const BASE = `https://api.figma.com/v1/files/${FILE_ID}`;
const AUTH = { "X-Figma-Token": TOKEN, "Content-Type": "application/json" };

// Fetch existing state for upsert logic
const getRes = await fetch(`${BASE}/variables/local`, { headers: { "X-Figma-Token": TOKEN } });
if (!getRes.ok) {
  console.error("Failed to fetch existing variables:", await getRes.text());
  process.exit(1);
}

interface CollectionMeta {
  id: string;
  name: string;
  modes: { modeId: string; name: string }[];
}
interface VariableMeta {
  id: string;
  name: string;
  variableCollectionId: string;
  resolvedType: string;
  valuesByMode: Record<string, unknown>;
}
const { meta } = (await getRes.json()) as {
  meta: {
    variableCollections: Record<string, CollectionMeta>;
    variables: Record<string, VariableMeta>;
  };
};

const existingColls = Object.values(meta.variableCollections);
const existingVars = Object.values(meta.variables);

// ─── Payload builders ─────────────────────────────────────────────────────────

let _seq = 0;
const tmp = () => `t${_seq++}`;

const variableCollections: object[] = [];
const variableModes: object[] = [];
const variables: object[] = [];
const variableModeValues: object[] = [];

function resolveCollection(name: string) {
  const found = existingColls.find((c) => c.name === name);
  if (found) {
    return {
      collId: found.id,
      modeMap: Object.fromEntries(found.modes.map((m) => [m.name, m.modeId])),
      isNew: false as const,
    };
  }
  const collId = tmp();
  const initModeId = tmp();
  variableCollections.push({ action: "CREATE", id: collId, name, initialModeId: initModeId });
  return { collId, modeMap: {} as Record<string, string>, isNew: true as const, initModeId };
}

function resolveMode(name: string, collId: string, modeMap: Record<string, string>, reservedId?: string) {
  if (modeMap[name]) return modeMap[name];
  const modeId = reservedId ?? tmp();
  variableModes.push({ action: "CREATE", id: modeId, name, variableCollectionId: collId });
  return modeId;
}

// Collections + modes
const colorColl = resolveCollection("Tokens/Colors");
const lightModeId = resolveMode(
  "Light",
  colorColl.collId,
  colorColl.modeMap,
  colorColl.isNew ? colorColl.initModeId : undefined
);
const darkModeId = resolveMode("Dark", colorColl.collId, colorColl.modeMap);

const radiusColl = resolveCollection("Tokens/Radius");
const defaultModeId = resolveMode(
  "Default",
  radiusColl.collId,
  radiusColl.modeMap,
  radiusColl.isNew ? radiusColl.initModeId : undefined
);

// Color variables
for (const [name, { light, dark }] of Object.entries(colorTokens)) {
  const group = name.startsWith("surgent-") ? "Surgent" : "Semantic";
  const varName = `${group}/${name}`;
  const existing = existingVars.find(
    (v) => v.name === varName && v.variableCollectionId === colorColl.collId
  );
  const varId = existing?.id ?? tmp();

  if (!existing) {
    variables.push({
      action: "CREATE",
      id: varId,
      name: varName,
      variableCollectionId: colorColl.collId,
      resolvedType: "COLOR",
      scopes: ["ALL_SCOPES"],
    });
  }

  const lAction = !existing || !(lightModeId in (existing.valuesByMode ?? {})) ? "CREATE" : "UPDATE";
  const dAction = !existing || !(darkModeId in (existing.valuesByMode ?? {})) ? "CREATE" : "UPDATE";
  variableModeValues.push(
    { action: lAction, variableId: varId, modeId: lightModeId, value: light },
    { action: dAction, variableId: varId, modeId: darkModeId, value: dark }
  );
}

// Radius variables
for (const [name, value] of Object.entries(radiusTokens)) {
  const varName = `Radius/${name}`;
  const existing = existingVars.find(
    (v) => v.name === varName && v.variableCollectionId === radiusColl.collId
  );
  const varId = existing?.id ?? tmp();

  if (!existing) {
    variables.push({
      action: "CREATE",
      id: varId,
      name: varName,
      variableCollectionId: radiusColl.collId,
      resolvedType: "FLOAT",
      scopes: ["CORNER_RADIUS"],
    });
  }

  const action =
    !existing || !(defaultModeId in (existing.valuesByMode ?? {})) ? "CREATE" : "UPDATE";
  variableModeValues.push({ action, variableId: varId, modeId: defaultModeId, value });
}

// ─── Push ─────────────────────────────────────────────────────────────────────

const created = variables.filter((v: any) => v.action === "CREATE").length;
console.log(
  `Pushing: ${created} new variables, ${variableCollections.length} collections, ${variableModes.length} modes...`
);

const postRes = await fetch(`${BASE}/variables`, {
  method: "POST",
  headers: AUTH,
  body: JSON.stringify({ variableCollections, variableModes, variables, variableModeValues }),
});

const result = (await postRes.json()) as Record<string, unknown>;

if (!postRes.ok) {
  console.error("Figma API error:", JSON.stringify(result, null, 2));
  process.exit(1);
}

console.log(`✓ Synced to Figma`);
console.log(`  ${variables.length} variables, ${variableCollections.length} collections`);
