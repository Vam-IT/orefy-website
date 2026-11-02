# Orefy Design System

## Context
Orefy is a brand that, as far as these materials show, consists of a logo suite only. The name and mark suggest refinement: grey **rock strata** lines (raw material) with a faceted **gold ore** gem breaking out of them (the refined result). No product, website, codebase, Figma or copy was provided, so the product surface is **unknown**. Foundations and components here derive from the logo; product-level UI is not invented.

**Sources provided** (copied into `assets/`):
- `uploads/orefy-logo-light.svg`, `uploads/orefy-logo-dark.svg` — horizontal lockups (mark + "orefy" wordmark, lowercase, outlined paths)
- `uploads/orefy-mark.svg`, `uploads/orefy-app-icon.svg`, `uploads/orefy-icon-small.svg`, `uploads/orefy-favicon.svg`

No Figma links, repos or decks were given.

## Content fundamentals
No product copy was supplied; this guidance is inferred from the brand and should be confirmed.
- **Wordmark is lowercase "orefy"**; in running text write "Orefy" (sentence-start capital).
- **Voice:** precise, calm, confident. Short declarative sentences. Talk about outcomes: raw → refined. Light use of the refining metaphor ("Refine the raw."), never punny overkill.
- **Person:** address the user as "you"; the product speaks as "we" sparingly.
- **Casing:** sentence case for headings, buttons, menu items ("Run extraction", not "Run Extraction"). Overlines are the only uppercase, letter-spaced text.
- **Numbers:** use real figures with thousands separators ("1,204 records"); IDs and file names in mono.
- **Emoji:** none. Unicode symbols only where typographic (·, →, ×).
- Examples: "Extraction complete — 1,204 records refined." · "Delete source? Refined records stay. Raw files are removed permanently."

## Visual foundations
- **Colors:** two families from the mark. *Ore* gold (#F2C46D → #A8661F facets, extended to a 50–900 scale) is the only accent — primary buttons, focus rings, active tabs, selected states. *Slate* neutrals (strata #5E6574, ink #16181D) carry everything else. Semantic green/red/blue are muted to sit beside slate. Warning reuses ore.
- **Primary button:** ore-500 fill with **ink text** (ink on gold ≈ 7:1; white on gold fails contrast). An `ink` variant (slate-900) serves dark, marketing-style CTAs.
- **Type:** Manrope (substitute — see caveats) for display and UI; extra-bold 800 with −0.03em tracking for display, 700 for headings, 400–600 for body/labels. JetBrains Mono for IDs, code and numeric data.
- **Spacing:** 2px base, practical rhythm of 4/8/12/16/24/32. Controls 28/36/44px tall.
- **Corner radii:** crisp and faceted, like the gem — 2/4/6/10/14px; pills only for Tags and Switch tracks. No large bubbly rounding.
- **Backgrounds:** flat. Off-white app background (#FBFBFA) with white cards; dark surfaces use slate-900/950. No gradients, no textures. The strata-lines + faceted-gold motif may appear as a graphic accent (hero, empty states) but don't redraw the mark — use the SVG assets.
- **Cards:** white, 1px slate-200 border, 10px radius, hairline shadow (`--shadow-sm`). Raised (popover/dialog) uses `--shadow-md`/`--shadow-lg`. No colored left-border accents.
- **Borders:** 1px hairlines in slate-100/200/300 do most separation work; shadows are secondary.
- **Shadows:** cool, low-opacity slate (rgba(22,24,29,…)), always paired with a near-invisible 1px ring. Focus = 3px ore-300 glow.
- **Hover:** fills shift one step (ore-500 → ore-400 lighter; neutral → slate-50 sunken). **Press:** one step darker + 1px downward nudge. No scale bounces.
- **Motion:** quick and functional — 120–280ms, `cubic-bezier(.2,.7,.2,1)` ease-out. Fades and short slides only.
- **Transparency/blur:** only for the modal scrim (48% slate + 2px blur) and dark-theme soft fills.
- **Imagery:** none provided. If used, prefer warm-neutral, natural/material photography (stone, metal, light) with gold highlights; avoid saturated blue tech imagery.
- **Layout:** content max 1200px; app sidebars 248px. Fixed elements limited to top bars/sidebars.
- **Dark theme:** `[data-theme="dark"]` remaps semantic aliases; logo-dark lockup on slate-900.

## Iconography
No icon set was provided. **Substitution:** use [Lucide](https://lucide.dev) from CDN (`https://unpkg.com/lucide@latest`) — 2px round-cap, round-join strokes match the strata lines in the mark. Size 16px in controls, 20px in navigation; color `currentColor` (usually slate-500/700). No emoji, no icon font, no PNG icons. Components embed the few glyphs they need (chevron, check, ×) as inline Lucide-path SVGs.

## Index
- `styles.css` — entry point (imports only)
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`
- `assets/` — logos (`orefy-logo-light.svg`, `orefy-logo-dark.svg`), mark (`orefy-mark.svg`, `logo.svg`), `orefy-app-icon.svg`, `orefy-icon-small.svg`, `orefy-favicon.svg`
- `guidelines/` — foundation specimen cards (colors, type, spacing, radii, elevation, brand)
- `components/` — React primitives
- `thumbnail.html`, `SKILL.md`

### Components
- `components/forms/` — Button, IconButton, Input, Select, Checkbox, Radio, Switch
- `components/display/` — Card, Badge, Tag, Tabs, Tooltip
- `components/feedback/` — Dialog, Toast

No source defined a component inventory; this is a standard set authored from the brand foundations.

### UI kits
None — no product screens, codebase or Figma were provided. Add sources to enable a UI kit recreation.
