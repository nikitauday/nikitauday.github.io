# Nikita Uday Portfolio — Design System (MASTER)

Source of truth, reverse-engineered from the live codebase (`src/index.css`,
`src/pages/about.css`, and component inline styles) rather than generated —
this documents the system that's already in production, not a proposed one.

Product type: personal portfolio / product-management case-study site.
Mood: warm, editorial, confident — serif display headings on a cream ground,
one warm accent (terracotta) for primary actions, one cool accent (sage) for
links/secondary actions and metadata.

---

## 1. Color

### Core tokens (`:root` in `src/index.css`)

| Token | Value | Role |
|---|---|---|
| `--ink` | `#173c4a` | Primary text, headings |
| `--ink-muted` | `#5f7a82` | Secondary text, captions, metadata |
| `--terracotta` | `#c91f6e` | Primary accent — CTAs, active nav, "worked at" resume pill |
| `--terracotta-dark` | `#96144f` | Primary accent hover/active |
| `--terracotta-tint` | `#f7d9e8` | Primary accent tag background |
| `--sage` | `#2aa298` | Secondary accent — links, secondary buttons, borders |
| `--sage-dark` | `#1c7a71` | Secondary accent text/hover |
| `--sage-dark-hover` | `#12554e` | Secondary accent deepest hover (nav brand hover, link hover) |
| `--sage-tint` | `#dde3c4` | Secondary accent tag/chip background |
| `--citrus` / `--citrus-dark` / `--citrus-tint` | alias of sage values | Legacy alias — same hex as `--sage*`; treat as one accent family, don't diverge the two names further |
| `--color-bg` | `#f7ecc9` | Page background (warm cream) |
| `--color-surface` | `#fdf6df` | Card / raised-surface background (lighter cream) |
| `--color-text` | `var(--ink)` | Body text alias |
| `--color-accent` | `var(--sage-dark)` | Semantic accent alias (links) |
| `--color-accent-600` | `var(--sage-dark-hover)` | Semantic accent hover alias |
| `--color-divider` | `rgba(23,60,74,.14)` | Hairlines, table borders, timeline connector |

### Usage rules

- **Terracotta = commitment.** Reserve it for the single primary action per view (Contact/Email CTA, Resume download, active nav/filter state, primary tag kicker). Don't add a third accent color.
- **Sage = navigation/discovery.** Links, secondary buttons, "read more" affordances, section eyebrow dots.
- **Never place body text below 4.5:1.** `--ink` on `--color-bg` = ~9:1 (verified safe). `--ink-muted` on `--color-bg`/`--color-surface` sits ~4.6:1 — treat `--ink-muted` as a floor, don't go lighter.
- White text (`#fff`) is only used on solid `--terracotta` or `--sage` fills (buttons, resume pill, CTA card) — never on tints.
- No dark mode exists today. If one is added, don't invert — desaturate/darken the cream toward a warm charcoal and re-verify contrast per token rather than flipping values.

### Known duplication (not yet fixed)

`about.css` redeclares the same six colors under an `--a-` prefix scoped to `.about-page` instead of reusing the root tokens (`--a-ink`, `--a-terracotta`, etc.), and drops `--terracotta-tint`/`--sage-dark-hover` naming consistency. Functionally identical values today — but a future palette tweak has to be made in two places. Worth collapsing onto the root tokens next time that file is touched.

---

## 2. Typography

| Token | Value |
|---|---|
| `--font-heading` | `'DM Serif Display', serif` (weight 400 only) |
| `--font-body` | `'Instrument Sans', sans-serif` (400/500/600/700) |

Loaded via Google Fonts `<link>` in `index.html` with `display=swap` — already following `font-loading` best practice.

### Scale

| Element | Size | Notes |
|---|---|---|
| `h1` | `clamp(36px, 5vw, 56px)` | Hero name/statement only |
| About-page hero title | `clamp(48px, 8vw, 84px)` | Larger, page-specific — centered display moment |
| `h2` | `clamp(24px, 2.6vw, 30px)` → `22px` below 480px | Section headings |
| Section-heading component (`SectionHeading.jsx`) | `clamp(30px, 3.6vw, 44px)` | Used for centered case-study section titles — sits between h1 and h2, own clamp rather than reusing `h2` |
| `h3` | `26px` → `21px` below 480px | Card/timeline titles |
| `h4` | `20px` | — |
| Body | `15px` / line-height `1.55` | Base site-wide |
| About-page body | `16.5px` / line-height `1.75` | Slightly larger — long-form bio copy |
| Eyebrow / labels | `12–13px`, `.05–.11em` tracking, uppercase | Metadata, kickers, credential labels |

### Rules

- Headings: `font-weight: 400` (DM Serif Display doesn't carry a bold cut in use — weight is fixed, hierarchy comes from size only). Don't request `font-weight: 700` on headings.
- Body weight hierarchy: 400 regular copy, 500 labels/tags, 600 emphasis/buttons/nav.
- Line length: measured via `--measure: 62ch`, applied to hero/bio paragraphs — hold this ceiling on new long-form copy.
- Body base is 15px, one below the general 16px web-readability guideline. Acceptable here (no form inputs to trigger iOS zoom, short-form card copy dominates), but don't push it lower, and prefer 16px+ for any new long-form reading surface (case-study body copy).

---

## 3. Spacing, radius, shadow

### Spacing scale (`--space-*`, 5px increments)

`--space-1: 5px` · `--space-2: 10px` · `--space-3: 15px` · `--space-4: 20px` · `--space-6: 30px` · `--space-8: 40px`

Plus a parallel **leading-based rhythm** used for section/vertical spacing: `--leading: 28px` (one text line), `--half: 14px`. Most section `padding` is expressed as `calc(n * var(--leading))` (e.g. `calc(2.5 * var(--leading))`) rather than the space scale — the space scale is for tight/component-level gaps, `--leading` multiples are for section rhythm. Keep that split: don't reach for `--space-8` to space out whole sections.

Edge/container: `--edge: clamp(20px, 5vw, 72px)` (page gutter), `.wrap { max-width: 1200px }` (content container), about-page uses a tighter `max-width: 820px` reading column.

### Radius

`--radius-sm: 12px` · `--radius-md: 20px` · `--radius-lg: 20px` (same as md today — no visual tier between them) · `--radius-pill: 100px` (buttons, tags, chips)

### Shadow (elevation)

| Token | Value | Use |
|---|---|---|
| `--shadow-sm` | `0 6px 16px` ink-6% | Cards at rest (`.elev-sm`) |
| `--shadow-md` | `0 12px 24px` ink-10% | Card hover |
| `--shadow-lg` | `0 8px 20px` ink-10% | Hero portrait, about headshot |
| `--shadow-bar` | `0 8px 20px` ink-6% | Credentials bar |

All shadows are ink-tinted (not pure black) — keep new shadows on `color-mix(in srgb, var(--ink) N%, transparent)` rather than `rgba(0,0,0,…)` to stay consistent with the warm palette.

---

## 4. Components

### Buttons (`.btn`)
Pill radius, 13px/600 weight label, `.15s ease` transitions on background/border/color only (no transform in CSS — hover "lift" comes from Framer Motion `whileHover={{ scale: 1.04 }}` / `whileTap={{ scale: 0.98 }}` on the `motion.a` wrapper, not CSS).
- `.btn-primary` — solid terracotta, white text. The one primary action per section (Hero "Background", Nav "Contact", Contact "Email").
- `.btn-secondary` / `.btn-ghost` — sage outline, transparent fill, sage-tint hover. Functionally identical today (same colors, `.btn-secondary` is 1.5px border with adjusted padding) — treat `.btn-ghost` as the default secondary and avoid growing a third variant that duplicates it.

### Cards (`.card`)
20px radius, `--color-surface` fill, kicker (12px uppercase, terracotta-dark or sage-dark by category) → serif title (23px) → muted body → meta row. `.card-cta` is the trailing "see more" tile in a grid: inverted to solid terracotta with white text, same radius/padding, distinct from content cards by color alone plus an arrow icon and different copy — not by color alone.

### Tags/chips (`.tag`)
Pill, 13px/500, two semantic fills: `.tag-accent` (terracotta-tint bg / terracotta-dark text) for primary category, `.tag-neutral` (sage-tint bg / sage-dark text) for secondary. Outline variants (`.tag-outline-terracotta`, `.tag-outline-sage`) swap to surface-bg + colored border, used for the dense skills list on the Experience section where a solid fill for 17 tags would be too heavy.

### Nav (`.nav`)
Sticky top-0, transparent-over-bg (no scroll shadow/blur added on scroll — flat throughout). Active route: `terracotta-dark` text + bold; inactive: `sage-dark`, brightening to `sage-dark-hover` on hover. `Nav.jsx` is shared correctly across Home, Projects, and Research. `AboutPage.jsx` alone hand-rolls a second copy (`.about-nav` markup + styles in `about.css`) instead of reusing `Nav.jsx` — same visual pattern, duplicated implementation. Worth converging onto `Nav.jsx` next time About is touched, rather than adding a third copy.

### Filter buttons (`.filter-btn`)
Outline pill, `--color-divider` border at rest, sage border+text on hover, solid `--sage-dark` fill when `.active`. Now paired with `aria-pressed` reflecting the boolean (fixed in this session) — keep that pairing on any new toggle-style control instead of a class name alone.

### Credentials bar (`.credentials-bar`)
Single-row surface card holding two logo groups + status + resume pill; wraps on narrow widths via `flex-wrap`. Logos fixed at 40×40px `object-fit: contain` regardless of source aspect ratio — any new logo asset should be roughly square-cropped before adding here rather than relying on `object-fit` to hide a bad crop.

### Timeline (`.timeline`)
Left rail: 44×44 logo + 1px connector line (`--color-divider`) to the next item, `top:54px / bottom:-49px` offsets tuned for the current row height — if a row's height changes materially (longer description wrapping to 4+ lines), re-check the connector still reaches the next logo rather than assuming the offsets are height-agnostic.

### Tables (`.table`)
Surface card wrapper with horizontal scroll (`.table-wrap`) for narrow viewports rather than letting the page scroll — correct pattern, keep it for any future data table.

---

## 5. Motion

Framer Motion throughout; two shared patterns:
- **`Reveal.jsx`** — the standard entrance: `opacity 0→1, y:24→0`, `duration: 0.6`, `ease: [0.22,1,0.36,1]`, `viewport={{ once: true, amount: 0.2 }}`. Use this component (not a bespoke `motion.div`) for any new section-entrance animation so timing stays unified.
- **Interactive elements** — `whileHover={{ scale: 1.04 }}` / `whileTap={{ scale: 0.98 }}`, `duration: 0.15`, on buttons and cards (cards additionally lift `y: -3` + raise to `--shadow-md`).
- List/grid entrances (`WorkGrid`, `Experience` timeline) stagger children at `0.08s`.

`prefers-reduced-motion` is now handled globally via `<MotionConfig reducedMotion="user">` wrapping every entry point (`main.jsx`, `about-main.jsx`, `projects-main.jsx`, `research-main.jsx`) — added this session. Any animation added outside Framer Motion (raw CSS `@keyframes`, etc.) needs its own `@media (prefers-reduced-motion: reduce)` guard, since `MotionConfig` only covers Framer-driven motion.

---

## 6. Layout

- Container: `.wrap { max-width: 1200px; margin:0 auto; padding: 0 var(--edge) }` on the SPA home; about page uses its own tighter `.about-main { max-width: 820px }` reading column — intentional (bio is long-form prose, home is a scanning layout), don't force them to match.
- Single breakpoint in practice: **640px** (nav wraps, about-grid/gallery collapse to 1 column), with a secondary **860px** breakpoint for case-study two-column grids (`.story-grid`) and **480px** for heading-size step-down. No 768px/1024px tier exists yet — if a tablet-specific layout bug shows up, add the breakpoint rather than stretching the 640px one.
- `scroll-behavior: smooth` is global; every anchored section sets `scroll-margin-top: 90px` to clear the sticky nav — keep pairing these two whenever a new in-page anchor is added, since scroll-margin without the section id (or vice versa) silently breaks the offset.

---

## 7. Icons

Inline hand-drawn SVGs (arrow, download chevron) — 2.2px stroke, round cap/join, `currentColor`. No icon library is installed. If icon needs grow beyond these two, adopt Phosphor (`@phosphor-icons/react`) rather than continuing to hand-write paths, and match the existing 2.2px stroke weight for continuity.

---

## Anti-patterns (project-specific — avoid reintroducing)

- Hardcoded hex colors inside component inline `style={}` (several exist today, e.g. `rgba(23,60,74,.28)` in `SectionHeading.jsx`, `rgba(255,255,255,.7)` in `MethodTags.jsx`) instead of a token. Acceptable for one-off translucency effects on a fixed white/ink base, but any new *palette* color must come from a `var(--token)`, not a fresh hex.
- Hotlinking third-party logo/image assets by URL instead of self-hosting (fixed for the four home-page logos this session — don't reintroduce for new employer/school logos; download and add to `src/assets/`).
- A toggle/pressed control (filter chip, tab) shipping with only a CSS class for state and no `aria-pressed`/`aria-selected` — now fixed on the work-grid filters; apply the same pairing to any new toggle.

---

## Pre-delivery checklist for new sections on this site

- [ ] Headings use `var(--font-heading)` at 400 weight; body uses `var(--font-body)`
- [ ] Only terracotta (primary) and sage (secondary) accents used — no third hue introduced
- [ ] New section spacing expressed as `calc(n * var(--leading))`, not ad-hoc px
- [ ] Cards/buttons/tags reuse `.card` / `.btn-*` / `.tag-*` classes, not new one-off styles
- [ ] Entrance animation uses `<Reveal>`, respects `MotionConfig reducedMotion="user"` already in place
- [ ] New anchored section has both `id` and `scrollMarginTop: 90`
- [ ] Any new toggle control has `aria-pressed`/`aria-selected` alongside its active class
- [ ] Any new external logo/photo is downloaded into `src/assets/`, not hotlinked
- [ ] Text contrast checked against `--color-bg` (#f7ecc9) or `--color-surface` (#fdf6df), not assumed from white
