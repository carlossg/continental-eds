<!-- stardust:provenance
writtenBy: stardust:dynamics
writtenAt: 2026-10-08T18:18:30+02:00
readArtifacts:
  - stardust/current/_dynamics.json
  - stardust/dynamics/dynamic-features.generated-plan.json
synthesizedInputs: []
-->
# Dynamic features — www.continental.com

## Listings contract

- **Press releases (`/en/press/press-releases/`, `/en/press/press-releases/corporate-topics/`):** Each press release page emits `<meta name="publication-date">`, `<meta name="category">`, `og:title`, `og:description`, `og:image`; read from `/query-index.json` (with interim static snapshot of the captured feed items for the 10-page cap).
- **Stories (`/en/stories/`):** Each story page emits `<meta name="category">`, `og:title`, `og:description`, `og:image`; curated story clusters (`c-cs-article-cluster__container`) render from static/index-backed cards.

## Features

| # | id | feature | class | reach | disposition | reproducibility | status | pattern | decision / owner | evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `s-header-quicksearch` | Header & page Solr search (`tx-solr-search-form-pi-results-header`, `tx-solr-search-form-pi-results`) | S | 9/10 | index-backed | self | interim | search-index-backed | Named assumption (hands-off): ship client-side search UI + query-index filter over migrated corpus | `header .c-quicksearch`, `.tx_solr` |
| 2 | `l-press-releases-feed` | Press releases & corporate topics filterable listing (`.tx_solr`, 9+ cards, pagination, date/category controls) | L | 3/10 | index-backed | needs-business-decision | interim | listing-index-backed | Named assumption (hands-off): ship captured initial feed + client filter controls; wire `/query-index.json` at rollout | `/en/press/press-releases/`, `/corporate-topics/` |
| 3 | `c-download-cart` | Document download cart (`.c-download-cart`, `tx_condownloadcenter_api` checkboxes & `/api-dc/` endpoints) | F | 10/10 | client-only | needs-backend | interim | client-compute | Named assumption (hands-off): ship interactive cart toggle + checkbox selection UI; backend zip endpoint `/api-dc/` awaits owner endpoint configuration | `.c-download-cart__toggle-button`, `api-dc` |
| 4 | `v-admiralcloud-video` | AdmiralCloud video player & Video.js (`player.admiralcloud.com`, `video-js` slots on `/en/`) | V | 1/10 | static-snapshot | needs-human-capture | interim | settled-dom-snapshot | Named assumption (hands-off): ship settled Video.js poster/controls snapshot; live AdmiralCloud player ID configurable by owner | `video-js`, `api.admiralcloud.com` |
| 5 | `a-equitystory-share-chart` | Share price widget (`charts3.equitystory.com` on `/en/` & footer) | A | 10/10 | embed-passthrough | needs-human-capture | interim | embed-passthrough | Named assumption (hands-off): preserve share price teaser link & static snapshot; live iframe src configurable by owner | `charts3.equitystory.com` |
| 6 | `m-filter-dropdowns` | Filter dropdown triggers (`aria-haspopup` on press release filter bar & language menu) | M | 10/10 | rebuild-native | self | pending | modal-loader | None — rebuilt in native block/header JS | `.c-language-menu`, `.c-search__filter` |
| 7 | `i18n-locale-switcher` | Locale variants (`/en/`, `/de/`, `/en/country-selector/` + hreflang alternates) | I18N | 10/10 | rebuild-native | needs-business-decision | interim | locale-tree | Named assumption (hands-off): deliver both captured locale roots (`/en/`, `/de/`) and `/en/country-selector/` in the 10-page cap | `link[rel=alternate][hreflang]` |
| 8 | `d-hyphenopoly-words` | Hyphenopoly dictionary (`/_assets/.../Hyphenopoly/ExcludedWords.json`) | D | 10/10 | static-snapshot | self | done | settled-dom-snapshot | None — native CSS `hyphens: manual` / settled text used | `ExcludedWords.json` |
| 9 | `t-cmp-gtm` | Consentmanager CMP (`consentmanager.net`) + Google Tag Manager (`utag_data`, `dataLayer`) | T | 10/10 | embed-passthrough | needs-business-decision | scaffolded-awaiting-owner | consent-gated-tags | Named assumption (hands-off): keep CMP/GTM disabled in `martech.js` scaffold until owner supplies production property IDs | `cdn.consentmanager.net`, GTM |

## Decision batch

Under `--hands-off`, all non-`self` items are resolved via named assumptions above and ship at the `interim` or `scaffolded-awaiting-owner` tier without blocking migration:
1. **Backend / API endpoints (`c-download-cart` `/api-dc/`):** Owner to confirm whether `/api-dc/` zip generation stays proxied to `www.continental.com` or moves to an App Builder action. Interim ships interactive UI controls.
2. **Third-party embeds (`v-admiralcloud-video`, `a-equitystory-share-chart`):** Owner to confirm AdmiralCloud player embed credentials and EquityStory chart widget licensing on the new host. Interim ships settled visual snapshot.
3. **Tags & CMP (`t-cmp-gtm`):** Owner to confirm `consentmanager.net` domain whitelist and GTM container IDs for the target origin.
4. **Locale tree scope (`i18n-locale-switcher`):** Capped at the 10 captured pages (`/en/*` + `/de/`) per `--cap 10`.

## Register (decided-out)

| feature | reason | production statement |
|---|---|---|
| *(none — no feature set to decided-out under hands-off assumptions)* | — | — |
