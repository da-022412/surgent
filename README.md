# Claro AI — Website

This repository covers the strategy, design, and development of the Claro AI marketing website. The goal is to clearly articulate the product's value proposition, showcase core features and workflows (AI-powered outreach, automation, integrations, dashboard capabilities), and establish credibility with a polished, performance-focused frontend.

## Scope

- Messaging and positioning refinement
- Sitemap and user journey definition
- UI design and component system
- Frontend development (performance + SEO focused)
- CMS or dynamic content setup (if applicable)
- Analytics and tracking implementation

The site communicates Claro AI as a serious, execution-ready platform — not just a concept — and is built to support future iterations as features evolve.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Component system | [shadcn/ui](https://ui.shadcn.com) |
| UI blocks | [Tailark](https://tailark.com) — Veil kit |
| Package manager | pnpm (workspaces) |
| Font | Geist Sans / Geist Mono (next/font) |

---

## Monorepo Structure

```
claro/
├── apps/
│   └── web/                  # Next.js marketing site
│       ├── app/
│       │   ├── page.tsx      # Homepage (single-page layout)
│       │   ├── faqs/
│       │   │   └── page.tsx
│       │   └── contact/
│       │       └── page.tsx
│       ├── components/
│       │   ├── header.tsx
│       │   ├── hero-section.tsx
│       │   ├── stats.tsx
│       │   ├── content.tsx
│       │   ├── integrations.tsx
│       │   ├── features.tsx
│       │   ├── testimonials.tsx
│       │   ├── call-to-action.tsx
│       │   ├── footer.tsx
│       │   ├── faqs.tsx
│       │   ├── contact.tsx
│       │   └── ui/           # shadcn primitives
│       ├── components.json   # shadcn + Tailark registry config
│       └── next.config.ts
├── package.json              # Workspace root
└── pnpm-workspace.yaml
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, stats, content, integrations, features, testimonials, CTA, footer |
| `/faqs` | Frequently asked questions |
| `/contact` | Contact form + office details |

---

## Getting Started

**Prerequisites:** Node.js 18+, pnpm 9+

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site runs at `http://localhost:3000` by default.

---

## Adding Components

Components are pulled from the [Tailark](https://tailark.com) registry via the shadcn CLI. The `@tailark` registry is pre-configured in `apps/web/components.json`.

```bash
cd apps/web

# Add a Tailark Veil component
npx shadcn@latest add @tailark/veil-[component-name]-[number] --yes
```

Use `--yes` but **not** `--overwrite`. The `--yes` flag auto-confirms new file creation while leaving existing files (including customized primitives) untouched. Adding `--overwrite` will clobber local changes.

**`button.tsx` has been extended** beyond the shadcn default to support `render` and `nativeButton` props used by Veil components. These allow buttons to render as other elements (e.g. Next.js `<Link>`) without leaking unknown props to the DOM.

---

## Image Domains

Remote image hostnames are whitelisted in `apps/web/next.config.ts`:

- `images.unsplash.com`
- `avatars.githubusercontent.com`

Add additional hostnames there as needed.
