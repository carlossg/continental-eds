<!-- stardust:provenance
writtenBy: stardust:dynamics
writtenAt: 2026-10-08T18:18:35+02:00
readArtifacts:
  - stardust/dynamic-features.md
  - stardust/dynamics/dynamic-features.generated-plan.json
synthesizedInputs: []
-->
# Dynamic features implementation plan — www.continental.com

## Phase summary

| Phase | Features | Deliverables | Verification | Effort |
|---|---|---|---|---|
| **1. Chrome & interactive controls (`rebuild-native`, `self`)** | `m-filter-dropdowns`, `s-header-quicksearch` | Header language dropdown (`.c-language-menu`), quicksearch toggle (`.c-quicksearch`), mobile offcanvas menu toggle (`.c-offcanvas__toggle-button`), hero slider controls (`.c-heroteaser-fixed`), and accordion/tab toggles | `motion-observe.mjs` + `motion-compare.mjs` on each archetype | S |
| **2. Listings & client filter tools (`index-backed`, `client-only`)** | `l-press-releases-feed`, `c-download-cart` | Press release filter controls (date/category inputs, checkbox selection) and pagination wrap (`ul.c-pagination__wrap`) with static/index-backed items | `content-diff.mjs` + `clip-probe.mjs` + `cap-probe.mjs` | M |
| **3. Media & embeds (`static-snapshot`, `embed-passthrough`)** | `v-admiralcloud-video`, `a-equitystory-share-chart` | Settled Video.js poster/overlay in `/en/` feature section and share price teaser block | `pixel-compare.mjs` + `visual-diff.mjs` | S |
| **4. Martech & i18n (`scaffolded-awaiting-owner`, `interim`)** | `t-cmp-gtm`, `i18n-locale-switcher` | Root-relative locale links between `/en/`, `/de/`, and `/en/country-selector/`; martech contract disabled by default until owner enables property IDs | `localize-links.mjs` + `delivery-lint.mjs` | S |
