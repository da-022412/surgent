<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

APIs, conventions, and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any routing or rendering code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# SurgentAI — Project Context

## Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 16 (App Router) | Read `node_modules/next/dist/docs/` before touching routing |
| Package manager | pnpm 11.1.2 | Pinned via `packageManager` in `package.json`; use `corepack pnpm ...` |
| Styling | Tailwind v4 | No `tailwind.config.ts` — tokens defined via `@theme inline` in `globals.css` |
| Components | shadcn/ui with **base-ui** primitives | Not Radix — APIs differ (see below) |
| Animation | Framer Motion | Wrapped in `MotionConfig reducedMotion="user"` in `Providers.tsx` |
| Colors | OKLCH | All colors are OKLCH — no hex, no HSL |
| Email | Resend (`resend` package) | API key in `.env.local` as `RESEND_API_KEY` |

## Repo status

### Completed on 2026-05-16

- Migrated the repo from npm to `pnpm@11.1.2`
- Added `packageManager` to `package.json`
- Added `pnpm-workspace.yaml` to prepare for a monorepo split
- Generated `pnpm-lock.yaml`
- Removed `package-lock.json`
- Reinstalled dependencies cleanly under pnpm
- Updated repo docs to use `pnpm`
- Verified the migration with `corepack pnpm install` and `corepack pnpm type-check`

### Current package commands

- Install: `corepack pnpm install`
- Dev: `corepack pnpm dev`
- Build: `corepack pnpm build`
- Type-check: `corepack pnpm type-check`
- Lint: `corepack pnpm lint`

## Design tokens

All tokens live in `src/app/globals.css` under `:root` (light) and `.dark`. Tailwind utilities are auto-generated:

- `bg-surgent-primary` / `text-surgent-primary` — volt green, CTAs and accents
- `bg-surgent-background` / `bg-surgent-surface` — page and card backgrounds
- `border-surgent-border` — structural borders
- `text-surgent-foreground` / `text-surgent-muted` — primary and secondary text
- Radius scale caps at `8px`. Never exceed `rounded-sm` (2px) for product UI. `rounded-md`/`rounded-lg` allowed for inputs and cards.

Full spec and color values: `DESIGN.md`

## base-ui API differences

These are not Radix — your training data is wrong for these:

- **Accordion** — `value: string[]` / `onValueChange: (value: string[]) => void` (multi-expand)
- **Select** — `onValueChange` receives `string | null`
- **TooltipTrigger** — renders as `<button>`, no `asChild` prop
- **Dialog** — use `Dialog as BaseDialog` from `@base-ui/react/dialog` for controlled modals; `onOpenChange` receives `(open: boolean)`. See `BookACallModal.tsx` for a working example.

## Framer Motion rules

- `easeOut` only — never `bounce`, never spring physics
- Cards: `whileHover={{ y: -2 }}`, buttons: `whileHover={{ y: -1 }}` + `whileTap={{ scale: 0.97 }}`
- Scroll reveals: `whileInView` + `viewport={{ once: true }}`
- `SurgentButton` already has lift/tap built in — don't wrap it in another motion element

## Design language (quick reference)

- **Power Rail** — active cards get a `2px` top border: `absolute inset-x-0 top-0 h-0.5 bg-surgent-primary`
- **Outer glow** — `shadow-[0_0_20px_oklch(82.55%_0.182_145_/_0.2)]`, stronger on hover. No drop shadows.
- **Mono label pattern** — `font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted`
- Full spec: `DESIGN.md`

## File structure

Current state: single Next.js app, monorepo-ready but not split yet.

```
pnpm-workspace.yaml        ← workspace definition for future `apps/*` and `packages/*`
src/
  app/
    globals.css           ← all OKLCH design tokens (source of truth)
    layout.tsx            ← root layout, font loading, theme script
    page.tsx              ← marketing homepage (/)
    api/
      book-a-call/
        route.ts          ← POST handler, sends email via Resend
    design-system/
      page.tsx            ← component showcase (/design-system)
  components/
    Providers.tsx         ← MotionConfig + TooltipProvider + BookACallProvider root
    surgent/              ← 16 Surgent components (PascalCase folders + index.ts)
    ui/                   ← shadcn/ui primitives
  features/
    marketing/
      components/         ← homepage sections + BookACallModal
    design-system/
      components/         ← design system showcase sections
DESIGN.md                 ← full design spec (Google design.md v2.0 format, OKLCH exception)
```

## Component conventions

- PascalCase folder + matching `.tsx` file + `index.ts` re-export
  ```
  src/components/surgent/SurgentButton/
    SurgentButton.tsx
    index.ts              ← export { SurgentButton } from "./SurgentButton"
  ```
- Add `"use client"` only when the component itself uses hooks, browser APIs, or motion directly
- Server Components can render Client Components — do not bubble `"use client"` to parent wrappers unnecessarily
- `SurgentButton` accepts an optional `href` prop — renders as `<motion.a>` when provided, `<motion.button>` otherwise
- "Book a Call" buttons use `BookACallButton` from `@/features/marketing/components/BookACallModal` — never a plain href

## Figma design system

**File:** `https://www.figma.com/design/LscCrzkHjJWFkMmiVGA7cz/Design-System`

### Status: Phase 3 complete + canvas cleanup done — 15 of 16 components built (`Prose` intentionally skipped — pure typography utility, nothing to render as a Figma component)

**Canvas structure (done 2026-05-16):** All 10 component pages (Foundations, Button, Badges & Labels, Alert, Input, Select & Textarea, Accordion, Section Header, Cards, Navigation) now have a named `SectionNode` wrapping a horizontal auto-layout "Content" frame. Sections are sized to their content via `resizeWithoutConstraints`. Section IDs: 61:3 (Foundations), 61:5 (Button), 61:7 (Badges), 61:9 (Alert), 61:11 (Input), 61:13 (Select), 61:15 (Accordion), 61:17 (SectionHeader), 61:19 (Cards), 61:21 (Navigation).

**ThemeToggle icons (done 2026-05-16):** Replaced unicode emoji text nodes (☀/☽) with proper Lucide-matching vector paths (16×16, strokeWeight=1.5, ROUND caps/joins, `surgent-muted` stroke) in:
- ThemeToggle component variants (50:2 State=Dark, 50:4 State=Light)
- NavBar Desktop "right" frame (50:16) — sun icon replacing old TEXT node 50:17
- NavBar Mobile "mobile-controls" frame (50:24) — sun icon replacing old TEXT node 50:25

Sun path (cubic bezier, no arcs): `M 8 5.333 C 9.473 5.333 10.667 6.527 10.667 8 C 10.667 9.473 9.473 10.667 8 10.667 C 6.527 10.667 5.333 9.473 5.333 8 C 5.333 6.527 6.527 5.333 8 5.333 Z M 8 1.333 L 8 2.667 M 8 13.333 L 8 14.667 M 3.287 3.287 L 4.227 4.227 M 11.773 11.773 L 12.713 12.713 M 1.333 8 L 2.667 8 M 13.333 8 L 14.667 8 M 4.227 11.773 L 3.287 12.713 M 12.713 3.287 L 11.773 4.227`

Moon path (arc-to-bezier converted): `M 8 2 C 6.3431 3.6569 6.3431 6.3431 8 8 C 9.6569 9.6569 12.3431 9.6569 14 8 C 14 11.3137 11.3137 14 8 14 C 4.6863 14 2 11.3137 2 8 C 2 4.6863 4.6863 2 8 2 Z`

> **Critical:** Figma `vectorPaths` does NOT support `A` (arc) commands — only M, L, H, V, C, Q, Z. Always convert arcs to cubic beziers before setting paths. Use the kappa constant (0.5522847498) for quarter-circle approximations.

Variable collections (Phase 1):
- `Primitives` — `VariableCollectionId:22:2`, single mode `22:0`
- `Color` — `VariableCollectionId:22:3`, Light mode `22:1` / Dark mode `22:2`
- `Spacing` — `VariableCollectionId:22:4`, single mode `22:3`

Component pages and node IDs:

| Page | Component set | ID |
|---|---|---|
| Button | SurgentButton | `38:2` |
| Badges & Labels | TagBadge | `39:6` |
| Badges & Labels | StatusBadge | `39:19` |
| Badges & Labels | EyebrowLabel | `39:20` |
| Alert | SurgentAlert | `42:26` |
| Input | SurgentInputField | `44:17` |
| Select & Textarea | SurgentSelect | `45:14` |
| Select & Textarea | SurgentTextarea | `45:25` |
| Accordion | AccordionItem | `46:12` |
| Section Header | SectionHeader | `47:14` |
| Cards | AuthorCard | `48:16` |
| Cards | DataCard | `48:30` |
| Cards | ArticleCard | `49:2` |
| Navigation | ThemeToggle | `50:6` |
| Navigation | NavBar | `50:30` |

### What's still TODO in Figma (Phase 4)

- **Foundations page** — page exists (`33:4`), Section `61:3` created but content frame is empty. Add color swatches, typography scale specimens, and spacing bars documenting the token values from `globals.css`
- **Cover page** — blank. Add a branded splash with file title, version, and last-updated date
- **Getting Started page** — blank. Add usage instructions: how to use variables, how to detach instances, link to `DESIGN.md`
- **Variable bindings** — components use hardcoded sRGB fills. Bind the `info`-variant colors in SurgentAlert, SurgentInputField, SurgentSelect, SurgentTextarea to the Color variable collection
- **Prose** — not represented in Figma. Add a page if rich-text/markdown layout documentation is ever needed
- **Code Connect** — no mappings set yet. Run `figma.add_code_connect_map` to link each component set to its `src/components/surgent/` counterpart
- **Warning/destructive colors** — yellow-400 and `--destructive` are not in the variable collections. Add them as primitives if token coverage is needed
- **NavBar moon icon** — NavBar Desktop (50:7) and Mobile (50:20) only show the sun icon (default/light state). A moon variant for the dark-state ThemeToggle inside NavBar has not been added yet

### Figma Plugin API notes (critical for resuming)

- `setSharedPluginData` / `getSharedPluginData` do **not** work on `VariableCollection` or `Variable` nodes — only on scene nodes. Use name-based lookup instead.
- OKLCH colors must be converted to sRGB (0–1) before passing to Figma fills. Embed this helper in every `use_figma` script that touches color:
  ```js
  function oklchToRgb(L, C, H) {
    const h = H * Math.PI / 180, a = C * Math.cos(h), b = C * Math.sin(h);
    const l_ = (L+0.3963377774*a+0.2158037573*b)**3;
    const m_ = (L-0.1055613458*a-0.0638541728*b)**3;
    const s_ = (L-0.0894841775*a-1.2914855480*b)**3;
    const rl=4.0767416621*l_-3.3077115913*m_+0.2309699292*s_;
    const gl=-1.2684380046*l_+2.6097574011*m_-0.3413193965*s_;
    const bl=-0.0041960863*l_-0.7034186147*m_+1.7076147010*s_;
    const g=c=>c<=0?0:c>=1?1:c<=0.0031308?12.92*c:1.055*Math.pow(c,1/2.4)-0.055;
    return {r:g(rl),g:g(gl),b:g(bl)};
  }
  // L/C/H match globals.css values scaled to 0–1 (e.g. oklch(82.55% …) → L=0.8255)
  ```
- `layoutSizingHorizontal/Vertical = 'FILL'` must be set **after** `parent.appendChild(child)` — throws if set before.
- `figma.combineAsVariants` stacks all variants at (0,0). Always manually reposition children after combining.
- Page context resets each `use_figma` call — always `await figma.setCurrentPageAsync(page)` at the start.

## What's next

### High priority
- **Monorepo split** — move the current marketing site into `apps/web`, add a separate private app in `apps/intel` for the competitive analysis tool, and extract shared code into `packages/*` (`ui`, `lib`, and optionally shared design tokens)
- **Next.js patch update** — completed on 2026-05-16. Repo now uses `next@16.2.6` and `eslint-config-next@16.2.6`
- **Custom Resend sender domain** — currently sending from `onboarding@resend.dev`. Add `getsurgent.ai` in the Resend dashboard, verify DNS, then update `from` in `src/app/api/book-a-call/route.ts` to `noreply@getsurgent.ai`
- **Case studies** — `TestimonialSection` (`#case-studies`) is a single placeholder quote. Needs real case study content or a multi-card layout once client work exists
- **Real logo bar** — `LogoBarSection` uses placeholder company names. Replace with actual client/partner logos (SVGs preferred)

### Medium priority
- **Deployment** — project is not yet linked to Vercel. Run `vercel link` then `vercel --prod` to deploy. Add `RESEND_API_KEY` as a Vercel environment variable before deploying
- **Custom domain** — `getsurgent.ai` needs to be pointed at the Vercel deployment
- **OG image** — no `opengraph-image` set. Add one in `src/app/` for social sharing previews
- **Light mode** — the site forces dark mode via the `dark` class on `<html>`. Light mode tokens exist but the marketing page hasn't been QA'd in light mode

### Low priority
- **Analytics** — no tracking in place. Consider Vercel Analytics (zero config) or Plausible
- **Rate limiting** — `/api/book-a-call` has honeypot + timing bot protection but no IP-based rate limiting. Add before going live under real traffic
