---
version: "2.0"
name: SurgentAI
description: A high-performance, kinetic visual identity for an AI automation agency.

colors:
  dark:
    primary: oklch(82.55% 0.182 145)
    background: oklch(12% 0.01 250)
    surface: oklch(16% 0.01 250)
    border: oklch(25% 0.02 145)
    foreground: oklch(92% 0.01 145)
    muted: oklch(60% 0.01 250)
    grid-line: oklch(25% 0.02 145 / 0.18)
  light:
    primary: oklch(40% 0.18 145)
    background: oklch(98% 0.003 145)
    surface: oklch(95% 0.006 145)
    border: oklch(80% 0.012 145)
    foreground: oklch(12% 0.01 145)
    muted: oklch(52% 0.008 145)
    grid-line: oklch(60% 0.01 145 / 0.1)

typography:
  h1:
    fontFamily: "Geist, system-ui"
    fontSize: "3.5rem"
    fontWeight: "800"
    letterSpacing: "-0.04em"
  body-md:
    fontFamily: "Geist, system-ui"
    fontSize: "1rem"
    lineHeight: "1.6"
  label-mono:
    fontFamily: "Geist Mono, monospace"
    fontSize: "0.6rem–0.85rem"
    letterSpacing: "0.05em–0.15em"
    textTransform: "uppercase"

rounded:
  sm: "2px"
  md: "4px"
  lg: "4px"
  xl: "6px"
  2xl: "8px"
  3xl: "8px"
  4xl: "8px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"

components:
  SurgentButton:
    primary:
      backgroundColor: "oklch(40% 0.18 145)"
      textColor: "oklch(98% 0.003 145)"
      typography: "label-mono"
      rounded: "sm"
      height: "36px"
      padding: "0 20px"
    ghost:
      backgroundColor: "transparent"
      textColor: "oklch(40% 0.18 145)"
      typography: "label-mono"
      rounded: "sm"
      height: "36px"
      padding: "0 20px"
  SurgentInputField:
    backgroundColor: "oklch(95% 0.006 145)"
    textColor: "oklch(12% 0.01 145)"
    rounded: "sm"
    height: "36px"
    padding: "0 12px"
  SurgentSelect:
    backgroundColor: "oklch(95% 0.006 145)"
    textColor: "oklch(12% 0.01 145)"
    rounded: "sm"
    height: "36px"
    padding: "0 12px"
  SurgentTextarea:
    backgroundColor: "oklch(95% 0.006 145)"
    textColor: "oklch(12% 0.01 145)"
    rounded: "sm"
    height: "100px"
    padding: "10px 12px"
  SurgentAccordion:
    backgroundColor: "transparent"
    textColor: "oklch(12% 0.01 145)"
    padding: "18px 0"
  SurgentAlert:
    info:
      backgroundColor: "oklch(95% 0.006 145)"
      textColor: "oklch(12% 0.01 145)"
      rounded: "sm"
      padding: "14px 16px"
    success:
      backgroundColor: "oklch(40% 0.18 145 / 0.05)"
      textColor: "oklch(40% 0.18 145)"
      rounded: "sm"
      padding: "14px 16px"
    warning:
      backgroundColor: "oklch(78% 0.18 85 / 0.05)"
      textColor: "oklch(60% 0.15 85)"
      rounded: "sm"
      padding: "14px 16px"
    error:
      backgroundColor: "oklch(50% 0.191 22 / 0.05)"
      textColor: "oklch(50% 0.191 22)"
      rounded: "sm"
      padding: "14px 16px"
  TagBadge:
    backgroundColor: "oklch(95% 0.006 145)"
    textColor: "oklch(52% 0.008 145)"
    typography: "label-mono"
    rounded: "sm"
    padding: "2px 8px"
  StatusBadge:
    backgroundColor: "oklch(95% 0.006 145)"
    textColor: "dynamic"
    typography: "label-mono"
    rounded: "sm"
    padding: "3px 8px"
  EyebrowLabel:
    backgroundColor: "transparent"
    textColor: "oklch(40% 0.18 145)"
    typography: "label-mono"
  SectionHeader:
    backgroundColor: "transparent"
    textColor: "oklch(12% 0.01 145)"
  AuthorCard:
    sm:
      backgroundColor: "transparent"
      textColor: "oklch(12% 0.01 145)"
      rounded: "sm"
      padding: "0"
    md:
      backgroundColor: "oklch(95% 0.006 145)"
      textColor: "oklch(12% 0.01 145)"
      rounded: "sm"
      padding: "20px"
  ArticleCard:
    backgroundColor: "oklch(95% 0.006 145)"
    textColor: "oklch(12% 0.01 145)"
    rounded: "sm"
  DataCard:
    backgroundColor: "oklch(95% 0.006 145)"
    textColor: "oklch(12% 0.01 145)"
    rounded: "sm"
    padding: "16px"
  NavBar:
    backgroundColor: "oklch(98% 0.003 145)"
    textColor: "oklch(12% 0.01 145)"
    height: "56px"
    padding: "0 24px"
  ThemeToggle:
    backgroundColor: "transparent"
    textColor: "oklch(52% 0.008 145)"
    size: "32px"
    rounded: "sm"
    padding: "6px"
  Prose:
    backgroundColor: "transparent"
    textColor: "oklch(52% 0.008 145)"
    typography: "body-md"
---

## Overview
SurgentAI is built on the concept of kinetic energy and "high-voltage" automation. The design should feel fast, precise, and sophisticated. It avoids soft gradients and rounded "bubbly" SaaS tropes in favor of hard edges, high contrast, and digital glows.

## Colors

All colors use the **OKLCH** color space for perceptual uniformity and wide-gamut display accuracy. Two modes are defined: dark (obsidian/volt aesthetic) and light (a crisp green-tinted neutral system).

### Dark Mode Tokens (`--surgent-*`)

| Token | OKLCH Value | Role |
|---|---|---|
| `--surgent-primary` | `oklch(82.55% 0.182 145)` | Surgent Green — CTAs, accents, active states |
| `--surgent-background` | `oklch(12% 0.01 250)` | Obsidian void — page background |
| `--surgent-surface` | `oklch(16% 0.01 250)` | Card and panel surfaces |
| `--surgent-border` | `oklch(25% 0.02 145)` | Structural borders — dark green-tinted |
| `--surgent-foreground` | `oklch(92% 0.01 145)` | Primary text |
| `--surgent-muted` | `oklch(60% 0.01 250)` | Secondary/caption text |
| `--surgent-grid-line` | `oklch(25% 0.02 145 / 0.18)` | CSS grid pattern overlay |

### Light Mode Tokens (`--surgent-*`)

| Token | OKLCH Value | Role |
|---|---|---|
| `--surgent-primary` | `oklch(40% 0.18 145)` | Deep green — CTAs, accents |
| `--surgent-background` | `oklch(98% 0.003 145)` | Near-white, green-tinted |
| `--surgent-surface` | `oklch(95% 0.006 145)` | Card and panel surfaces |
| `--surgent-border` | `oklch(80% 0.012 145)` | Structural borders |
| `--surgent-foreground` | `oklch(12% 0.01 145)` | Primary text |
| `--surgent-muted` | `oklch(52% 0.008 145)` | Secondary/caption text |
| `--surgent-grid-line` | `oklch(60% 0.01 145 / 0.1)` | CSS grid pattern overlay |

### Why OKLCH?

- **Perceptual uniformity:** Two colors with the same `L` value appear equally bright to the human eye.
- **Wide gamut:** OKLCH can address P3 and Rec.2020 colors that sRGB cannot.
- **Hue harmony:** Border tokens share hue 145° with primary at very low chroma, creating chromatic coherence.

### Color Philosophy

- **Dark mode** — Obsidian dominates as a void-like background; Surgent Green appears to glow or "surge" through the interface.
- **Light mode** — Crisp, green-tinted neutrals maintain the industrial precision without reverting to generic blues or grays.
- Use **primary** for all critical CTAs, success states, and active indicators.
- Use **border** for structural outlines to maintain a "blueprint" feel.

## Typography

- **Geist Sans** — Headlines and UI body text. Tight tracking, high weight for a modern engineered feel. All `font-sans` utilities.
- **Geist Mono** — All labels, badge text, data readouts, and status strings. Always uppercase. The monospace grid reinforces the agent/developer nature. All `font-mono` utilities.

### Type Scale (mono labels)

| Usage | Size | Tracking |
|---|---|---|
| Micro labels, metadata | `0.6rem` | `0.08em–0.12em` |
| Nav links, trigger text | `0.7rem` | `0.1em` |
| Button text (md) | `0.8rem` | `tracking-widest` |
| Button text (lg), badges | `0.85rem` | `0.05em` |

## Layout

- **Grid:** 12-column system with 24px gutters.
- **Max width:** `max-w-6xl` with `px-6` horizontal padding.
- **Sectioning:** Heavy horizontal rules (`1px solid border`) rather than background color shifts.
- **Grid Pattern Background:** CSS `repeating-linear-gradient` lines using `--surgent-grid-line` create the technical grid overlay.

## Elevation & Depth

Depth is expressed through light emission, not shadow. No drop shadows — only outward glows derived from the primary color.

### Outer Glow
Primary interactive elements emit a glow at rest, intensifying on hover — simulating electrical discharge.

```
/* rest */
box-shadow: 0 0 20px oklch(82.55% 0.182 145 / 0.2);
/* hover */
box-shadow: 0 0 30px oklch(82.55% 0.182 145 / 0.4);
```

Used on `SurgentButton` (primary variant), `DataCard`, and `ArticleCard`.

### Hover Lift
Interactive surfaces rise on hover via Framer Motion rather than a shadow increase.

- Cards: `whileHover={{ y: -2 }}`, `transition: { duration: 0.15, ease: "easeOut" }`
- Buttons: `whileHover={{ y: -1 }}` + `whileTap={{ scale: 0.97 }}`

Never use `bounce` or `spring` physics — precision over playfulness.

## Shapes

Sharp edges are core to the aesthetic. The scale caps at 8px; nothing rounder.

| Token | Value | Usage |
|---|---|---|
| `rounded-sm` / `--radius-sm` | `2px` | Buttons, badges, most UI |
| `rounded-md` / `--radius-md` | `4px` | Inputs, selects, cards |
| `rounded-lg`–`rounded-4xl` | `4px–8px` | shadcn overrides; never exceed 8px |

## Components

### Shared Patterns

#### The Power Rail
Containers representing an active process use a `2px` top border in `primary`. This is the "Power Rail" — it signals liveness and voltage. Implemented as `accent` prop on `DataCard` (default: true).

```
absolute left-0 right-0 top-0 h-0.5 bg-surgent-primary
```

#### Mono Label Pattern
All metadata, tags, labels: `font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted`. Used consistently across badges, author bylines, timestamps, and field labels.

---

### SurgentButton
Variants: `primary` | `ghost`. Sizes: `sm` | `md` | `lg`.

- **primary** — `bg-surgent-primary text-surgent-background` with outer glow; hover brightens and intensifies glow.
- **ghost** — transparent with `border-surgent-border`; hover reveals `border-surgent-primary` + subtle primary tint background.
- All buttons: `rounded-sm`, Framer Motion lift/press, `font-mono uppercase tracking-widest`.

### SurgentInputField
Text input with optional `label`, `hint`, and `error` slots. Label renders as mono micro-label above the field. Error overrides hint and applies `border-destructive` styling. Aria-linked via shared `id`.

### SurgentSelect
Dropdown select with the same label/hint/error pattern as `SurgentInputField`. `onValueChange` receives `string | null` (base-ui API). Styled trigger + content panel use `rounded-sm border-surgent-border bg-surgent-surface`.

### SurgentTextarea
Resizable textarea (`resize-y`) with the same label/hint/error pattern. Min height `100px`.

### SurgentAccordion
Multi-expand accordion (base-ui). `value: string[]` / `onValueChange: (string[]) => void`. Items divided by `border-y border-surgent-border`. Open trigger text turns `text-surgent-primary`.

### SurgentAlert
Variants: `info` | `success` | `warning` | `error`.

| Variant | Border | Title color |
|---|---|---|
| `info` | `border-surgent-border` | `text-surgent-foreground` |
| `success` | `border-surgent-primary/30` | `text-surgent-primary` |
| `warning` | `border-yellow-500/30` | `text-yellow-400` |
| `error` | `border-destructive/30` | `text-destructive` |

Dot indicator left of content, mono uppercase title, sans body text.

### TagBadge
Inline pill: `rounded-sm border-surgent-border bg-surgent-surface font-mono text-[0.6rem] uppercase`. Hover shifts to `border-surgent-primary/40 text-surgent-primary`. Used to label articles and content categories.

### StatusBadge
Statuses: `active` | `live` | `idle` | `error`. Active/live states show an animated ping dot. Color is applied inline (`oklch` string) rather than via Tailwind class to allow dynamic status mapping.

| Status | Color | Pulsing |
|---|---|---|
| `active` | Surgent Green | Yes |
| `live` | Surgent Green | Yes |
| `idle` | Muted | No |
| `error` | Destructive red | No |

### EyebrowLabel
Section pre-header. A filled `size-1 rounded-full bg-surgent-primary` dot precedes mono uppercase text in `text-surgent-primary`. Used above `SectionHeader`.

### SectionHeader
Composed of optional `EyebrowLabel`, `h2` headline, and optional description. Alignment: `left` (default) | `center`. Headline: `text-3xl md:text-4xl font-bold tracking-[-0.03em]`.

### AuthorCard
Sizes: `sm` | `md`.

- **sm** — inline layout: avatar + name/role. Avatar `size-7`.
- **md** — card layout: `rounded-sm border bg-surgent-surface p-5` with optional bio paragraph. Avatar `size-10`.

Avatar uses initials derived from name (first two initials). `AvatarFallback` styled with `bg-surgent-primary/10 text-surgent-primary font-mono`.

### ArticleCard
Clickable card (`<motion.a>`). Thumbnail placeholder area (`h-44`) at top with article title as faint mono overlay. Body: `TagBadge`, headline, excerpt, author/date/readTime footer divided by `border-t`. Hover lifts 2px and adds outer glow.

### DataCard
General-purpose data container with optional Power Rail accent. Props: `title`, `meta`, `accent` (bool, default true). Hover adds `border-surgent-primary/40` + glow. Children render below title/meta row. Extends `HTMLMotionProps<"div">` for animation composition.

### NavBar
Sticky top bar (`sticky top-0 z-50`). Logo mark: `size-2 rounded-none bg-surgent-primary` square with hover glow. Desktop: nav links (mono uppercase) + `ThemeToggle` + ghost `Sign In` + primary CTA. Mobile: `AnimatePresence` animated drawer with height transition.

### ThemeToggle
Icon button (`Sun` / `Moon`). Persists selection to `localStorage` under key `surgent-theme`. Applies/removes `.dark` class on `<html>`. No external state dependency — fully self-contained.

### Prose
`@tailwindcss/typography` wrapper with `.prose-surgent` theme applied. Headings: sans, semibold, tight tracking. Code spans: `rounded-sm border border-surgent-border bg-surgent-surface font-mono`. Blockquotes: left border in `primary`, not italic.

## Do's and Don'ts

- **Do:** Use subtle outer glows on primary elements to simulate electricity.
- **Do:** Keep dark mode backgrounds as dark as possible to maintain the "Surge" contrast.
- **Do:** Use `Geist Mono` for all numerical data and system status strings.
- **Do:** Apply Power Rail accent to any card representing a live or active process.
- **Do:** Animate with `easeOut` for precision; use `MotionConfig reducedMotion="user"` to respect system preferences.
- **Don't:** Use rounded corners above `4px` in product UI (shadcn overrides go up to 8px but only for internal compatibility).
- **Don't:** Use olive/forest green tones; stay in the neon/electric spectrum (hue 130–155°).
- **Don't:** Use white or light backgrounds in dark mode product UI.
- **Don't:** Animate with bounce or spring physics.
- **Don't:** Use color alone to communicate state — always pair with text or iconography.
