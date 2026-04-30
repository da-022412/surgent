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
| Email | Resend (`resend` npm package) | API key in `.env.local` as `RESEND_API_KEY` |

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

```
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

## What's next

### High priority
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
- **Rate limiting** — `/api/book-a-call` has no rate limiting. Add before going live under real traffic
