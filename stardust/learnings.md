# Stardust Replica & Rollout Learnings — Continental.com (`carlossg/continental-eds`)

## Summary
- **Source:** `https://www.continental.com` (10-page cap, `--hands-off` replica + rollout)
- **Target GitHub Repo:** `https://github.com/carlossg/continental-eds`
- **Live Origin:** `https://main--continental-eds--carlossg.aem.live`
- **Preview Origin:** `https://main--continental-eds--carlossg.aem.page`
- **Document Authoring (DA):** `https://da.live/#/carlossg/continental-eds`

## Key Technical Learnings
1. **CSS Relative Asset Resolution in EDS (`/styles/styles.css`):**
   - When lifting `stardust/canon/canon.css` into `/styles/styles.css`, relative `url('assets/fonts/...')` and `url('assets/media/...')` paths resolve against `/styles/` rather than root. Rewriting them to `url('../fonts/...')` and `url('../assets/media/...')` prevents silent `FontFace` load failures (`F-B2` class) on `ContinentalStagSansW`.
2. **Scoping Outer `<header>` Min-Height:**
   - Standard EDS boilerplate `header { min-height: var(--nav-height); }` matches any nested `<header class="o-header">` inside the header block, inflating the header by 70px when paired with `.o-header__spacer`. Scoping the placeholder rule to `body > header:empty { min-height: var(--nav-height); }` eliminates the vertical shift.
3. **Preserving Sibling & Boundary Selectors Across EDS Section Wrappers:**
   - Original Continental CSS relies on `.o-container:first-child.is-white`, `.o-container:last-child.is-white:not(.has-image)`, and `.o-container.is-white + .is-white` as direct children of `<main>`. Wrapping each section in `<div class="section"><div class="...-wrapper"><div class="... block">` makes every `.o-container` both `:first-child` and `:last-child` of its block, and the trailing empty metadata section becomes `:last-child` of `<main>`. Bridging those selectors with `main > .section:has(...)` and `:has(~ .section:not(:empty))` restored 0px height delta across all archetypes.
4. **Experience Workspace Node-Slotting (EW1–EW10) + AI Readability (99%+):**
   - Authoring semantic headings (`<h1>`–`<h3>`), paragraphs, links, and DA-hosted images in `content/*.html` while slotting live `[data-prose-index]` and `[data-image-index]` elements into the Continental DOM structure during block decoration achieved 99%+ strict AI readability (`0` servedGap) and 100% (`416/416`) Experience Workspace inline editability alongside 10/10 pixel-gate passes at 1440px and 360px.
