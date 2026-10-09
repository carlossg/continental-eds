<!-- stardust provenance: skill=stardust:dynamics · phase=plan draft · 2026-10-08T17:50:51.524Z · input stardust/current/_dynamics.json (3 pages, 44 findings) · reconciled against stardust/migrated -->
# Dynamic features — draft inventory (curate into `stardust/dynamic-features.md`)

One row per detected finding. Merge duplicates, drop noise, keep every axis honest. Columns: disposition = what we do · reproducibility = what it needs · status = where it stands (reference/triage.md).

| # | id | class | feature | pages | disposition | reproducibility | status | pattern | decision needed | notes |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | a-cms-app-settings-object-datalayer | A | CMS / app settings object dataLayer | 3/3 | static-snapshot | self | pending | read-settings | — (keys name endpoints, ids, vendors) |  |
| 2 | a-cms-app-settings-object-utag-data | A | CMS / app settings object utag_data | 3/3 | static-snapshot | self | pending | read-settings | — (keys name endpoints, ids, vendors) |  |
| 3 | a-unknown-third-party-host-charts3-equitystory-com | A | unknown third-party host charts3.equitystory.com | 1/3 | static-snapshot | needs-human-capture | pending | inspect | inspect the XHR, add a vendor row |  |
| 4 | a-unknown-third-party-host-api-admiralcloud-com | A | unknown third-party host api.admiralcloud.com | 1/3 | static-snapshot | needs-human-capture | pending | inspect | inspect the XHR, add a vendor row |  |
| 5 | a-unknown-third-party-host-analytics-admiralcloud-com | A | unknown third-party host analytics.admiralcloud.com | 1/3 | static-snapshot | needs-human-capture | pending | inspect | inspect the XHR, add a vendor row |  |
| 6 | a-unknown-third-party-host-mediafra-217-admiralcloud-com | A | unknown third-party host mediafra-217.admiralcloud.com | 1/3 | static-snapshot | needs-human-capture | pending | inspect | inspect the XHR, add a vendor row |  |
| 7 | a-first-party-api-get-en-api-dc | A | first-party API GET /en/api-dc/ | 1/3 (reach 1/10) | data-fed | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? |  |
| 8 | a-first-party-api-get-en-press-press-releases-api-dc | A | first-party API GET /en/press/press-releases/api-dc/ | 1/3 (reach 1/10) | data-fed | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? |  |
| 9 | a-first-party-api-get-en-press-press-contacts-api-dc | A | first-party API GET /en/press/press-contacts/api-dc/ | 1/3 (reach 1/10) | data-fed | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? |  |
| 10 | cr-client-rendered-slot-video-js-vjs-default-skin-vjs-paused | CR | client-rendered slot video-js vjs-default-skin vjs-paused | 1/3 | static-snapshot | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 11 | cr-client-rendered-slot-vjs-control-bar | CR | client-rendered slot vjs-control-bar | 1/3 | static-snapshot | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 12 | cr-client-rendered-slot-vjs-progress-control-vjs-control | CR | client-rendered slot vjs-progress-control vjs-control | 1/3 | static-snapshot | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 13 | cr-client-rendered-slot-vjs-progress-holder-vjs-slider-vjs-s | CR | client-rendered slot vjs-progress-holder vjs-slider vjs-slider-horizontal | 1/3 | static-snapshot | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 14 | cr-client-rendered-slot-vjs-error-display-vjs-modal-dialog-v | CR | client-rendered slot vjs-error-display vjs-modal-dialog vjs-hidden | 1/3 | static-snapshot | self | delivered-by-capture | settled-dom-snapshot | inspect the consumer | output already carries "This is a modal window." |
| 15 | cr-client-rendered-slot-vjs-caption-settings-vjs-modal-overl | CR | client-rendered slot vjs-caption-settings vjs-modal-overlay vjs-hidden | 1/3 | static-snapshot | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 16 | cr-client-rendered-slot-vjs-tracksettings | CR | client-rendered slot vjs-tracksettings | 1/3 | static-snapshot | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 17 | cr-client-rendered-slot-vjs-tracksettings-colors | CR | client-rendered slot vjs-tracksettings-colors | 1/3 | static-snapshot | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 18 | cr-client-rendered-slot-vjs-fg-color-vjs-tracksetting | CR | client-rendered slot vjs-fg-color vjs-tracksetting | 1/3 | static-snapshot | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 19 | cr-client-rendered-slot-vjs-text-opacity-vjs-opacity | CR | client-rendered slot vjs-text-opacity vjs-opacity | 1/3 | static-snapshot | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 20 | cr-client-rendered-slot-vjs-bg-color-vjs-tracksetting | CR | client-rendered slot vjs-bg-color vjs-tracksetting | 1/3 | static-snapshot | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 21 | cr-client-rendered-slot-vjs-bg-opacity-vjs-opacity | CR | client-rendered slot vjs-bg-opacity vjs-opacity | 1/3 | static-snapshot | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 22 | d-first-party-data-file-get-assets-hash-javascript-hyphenopo | D | first-party data file GET /_assets/{hash}/JavaScript/Hyphenopoly/ExcludedWords.json | 3/3 (reach 10/10) | data-fed | self | pending | sheet-sync | none (sync from the source origin) |  |
| 23 | f-form-tx-solr-search-form-pi-results-header-origin-en-gener | F | form "tx-solr-search-form-pi-results-header" → origin /en/general/search/ (1 fields) | 3/3 | rebuild-native | needs-backend | pending | forms | production endpoint; interim capture ships now |  |
| 24 | f-form-tx-solr-search-form-pi-results-origin-en-press-press- | F | form "tx-solr-search-form-pi-results" → origin /en/press/press-releases/ (1 fields) | 1/3 | rebuild-native | needs-backend | pending | forms | production endpoint; interim capture ships now |  |
| 25 | f-form-checkbox-checkbox-tx-condownloadcenter-api-transport- | F | form "checkbox:+checkbox:tx_condownloadcenter_api[transport][files][0][active]" → no action (JS-wired) (6 fields) | 1/3 | client-only | self | pending | client-compute | none |  |
| 26 | f-form-checkbox-checkbox-tx-condownloadcenter-api-transport- | F | form "checkbox:+checkbox:tx_condownloadcenter_api[transport][files][0][active]" → no action (JS-wired) (5 fields) | 1/3 | client-only | self | pending | client-compute | none |  |
| 27 | f-form-checkbox-checkbox-tx-condownloadcenter-api-transport- | F | form "checkbox:+checkbox:tx_condownloadcenter_api[transport][files][0][active]" → no action (JS-wired) (8 fields) | 1/3 | client-only | self | pending | client-compute | none |  |
| 28 | f-form-checkbox-checkbox-tx-condownloadcenter-api-transport- | F | form "checkbox:+checkbox:tx_condownloadcenter_api[transport][files][0][active]" → no action (JS-wired) (9 fields) | 1/3 | client-only | self | pending | client-compute | none |  |
| 29 | f-form-less-control-group-in-div-o-container-4-controls | F | form-less control group in div.o-container (4 controls) | 1/3 | client-only | self | pending | client-compute | none |  |
| 30 | f-form-less-control-group-in-input-dateselector-2-controls | F | form-less control group in input.dateselector (2 controls) | 1/3 | client-only | self | pending | client-compute | none |  |
| 31 | i18n-locale-variants-de-de-en-x-default | I18N | locale variants de-DE,en,x-default | 1/3 | rebuild-native | needs-business-decision | delivered-by-capture | locale-tree | scope of the locale trees | output already carries "https://www.continental.com/de/" |
| 32 | i18n-locale-variants-cs-cz-de-de-en-en-us-es-mx-fr-fr-hu-hu- | I18N | locale variants cs-CZ,de-DE,en,en-US,es-MX,fr-FR,hu-HU,ja-JP,ko-KR,zh-CN,x-default | 1/3 | rebuild-native | needs-business-decision | delivered-by-capture | locale-tree | scope of the locale trees | output already carries "https://www.continental.com/de/presse/pr" |
| 33 | i18n-locale-variants-cs-cz-de-de-en-es-mx-fr-fr-hu-hu-ja-jp- | I18N | locale variants cs-CZ,de-DE,en,es-MX,fr-FR,hu-HU,ja-JP,ro-RO,zh-CN,x-default | 1/3 | rebuild-native | needs-business-decision | delivered-by-capture | locale-tree | scope of the locale trees | output already carries "https://www.continental.com/de/presse/pr" |
| 34 | l-listing-candidate-div-9-cards | L | listing candidate div (9 cards) | 1/3 | index-backed | needs-business-decision | pending | listing-index-backed | index-driven or editorially curated? |  |
| 35 | m-modal-trigger-aria-haspopup-button-content | M | modal trigger aria-haspopup → button:content | 1/3 (reach 2/10) | rebuild-native | self | delivered-by-capture | modal-loader | none | output already carries "Sort by date (desc.)" |
| 36 | t-unknown-third-party-host-d-delivery-consentmanager-net | T | unknown third-party host d.delivery.consentmanager.net | 3/3 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | CMP domain script reuse on the new host |  |
| 37 | t-unknown-third-party-host-cdn-consentmanager-net | T | unknown third-party host cdn.consentmanager.net | 3/3 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | CMP domain script reuse on the new host |  |
| 38 | t-tag-manager-google-tag-manager | T | tag manager: Google Tag Manager | 3/3 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 39 | t-third-party-mount-div-data-src-tag-manager-injected-widget | T | third-party mount <div data-src> (tag-manager-injected widget) | 2/3 | embed-passthrough | needs-credential | pending | embed-passthrough | vendor account ids stay the owner's |  |
| 40 | t-unknown-third-party-host-player-admiralcloud-com | T | unknown third-party host player.admiralcloud.com | 1/3 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 41 | t-unknown-third-party-host-images-admiralcloud-com | T | unknown third-party host images.admiralcloud.com | 1/3 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 42 | v-iframe-without-src-runtime-injected-embed | V | iframe without src (runtime-injected embed) | 3/3 | embed-passthrough | needs-human-capture | pending | embed-passthrough | resolve the runtime src from a rendered capture |  |
| 43 | x-commerce-signals-cart-true-prices-0 | X | commerce signals (cart: true, prices: 0) | 3/3 | decided-out | needs-backend | pending | decided-out | auth / commerce on the new host? |  |
| 44 | x-sign-in-account-links | X | sign-in / account links | 1/3 | decided-out | needs-backend | pending | decided-out | auth / commerce on the new host? |  |

## Triage

- **Ships autonomously (reproducibility `self`):** 20 row(s) — read-settings, settled-dom-snapshot, sheet-sync, client-compute.
- **One owner decision batch:** 17 row(s) — inspect the XHR, add a vendor row · which tier for the target host; consumer on the migrated pages? · production endpoint; interim capture ships now · index-driven or editorially curated? · CMP domain script reuse on the new host · which tags run on the new host; property ids.
- **Already delivered by the capture pipeline:** 5 row(s) — no work.
- **Host-bound on the target:** 0 of 0 probed API paths — the off-origin data work.

## Phases

- **capture** — 12
- **detect** — 6
- **client tools** — 6
- **tags** — 5
- **off-origin data** — 3
- **locale wave** — 3
- **forms** — 2
- **embeds** — 2
- **register** — 2
- **data** — 1
- **listings** — 1
- **interactive** — 1
