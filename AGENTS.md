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
| Styling | Tailwind v4 | No `tailwind.config.ts` — tokens defined via `@theme inline` in `globals.css` |
| Components | shadcn/ui with **base-ui** primitives | Not Radix — APIs differ (see below) |
| Animation | Framer Motion | Wrapped in `MotionConfig reducedMotion="user"` in `Providers.tsx` |
| Colors | OKLCH | All colors are OKLCH — no hex, no HSL |

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

```
src/
  app/
    globals.css           ← all OKLCH design tokens (source of truth)
    layout.tsx            ← root layout, font loading, theme script
    page.tsx              ← marketing homepage (/)
    design-system/
      page.tsx            ← component showcase (/design-system)
  components/
    Providers.tsx         ← MotionConfig + TooltipProvider root
    surgent/              ← 16 Surgent components (PascalCase folders + index.ts)
    ui/                   ← shadcn/ui primitives
  features/
    marketing/
      components/         ← homepage sections (Hero, Features, Footer, etc.)
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
