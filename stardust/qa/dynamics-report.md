# Dynamics parity check — https://main--continental-eds--carlossg.aem.live — 2026-10-09T12:16:13.504Z

Replayed 7 checks over 7 features · pass 7 · fail 0. Flows, not presence.

| feature | class | status | check | result | detail | third-party requests |
|---|---|---|---|---|---|---|
| EDS Query Index (/query-index.json) | D | delivered | fetch-json | PASS | 200 · 11 rows · keys columns,data,offset,limit,total,:type |  |
| Hero Slider on /en | CR | delivered | dom-count | PASS | 2 × .c-heroteaser-fixed__slide (min 2) |  |
| Press Releases Listing on /en/press/press-releases | L | delivered | dom-count | PASS | 34 × .c-teaser, .c-search a[href] (min 5) |  |
| Press Contacts Cards on /en/press/press-contacts | CR | delivered | dom-count | PASS | 5 × .c-teaser, .c-contact (min 2) |  |
| Reports & Presentations Downloads on /en/investors/reports-presentations | D | delivered | dom-count | PASS | 419 × .o-accordion__item, .c-download-list__item, a[href] (min 5) |  |
| Consent-gated third-party tags | T | delivered | consent-gate | PASS | no request to 3 gated host pattern(s) before consent |  |
| Zero runtime page errors across all 10 delivered pages | A | delivered | no-page-errors | PASS | none on 10 page(s) |  |

## Features without checks
