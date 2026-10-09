---
name: Continental AG Corporate Web Design System
description: Descriptive current-state design system extracted from www.continental.com
colors:
  primary: "#ffa500"
  text-primary: "#000000"
  neutral-bg: "#ffffff"
  surface-light: "#f0f0f0"
  surface-warm: "#f4cf9b"
  text-muted: "#6b6b6b"
  text-secondary: "#969696"
  border-neutral: "#cdcdcd"
  primary-hover: "#e38702"
typography:
  display:
    fontFamily: "ContinentalStagSansW, Arial, sans-serif"
    fontSize: "52.5px"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "normal"
  h2:
    fontFamily: "ContinentalStagSansW, Arial, sans-serif"
    fontSize: "39.38px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
  h3:
    fontFamily: "ContinentalStagSansW, Arial, sans-serif"
    fontSize: "26.25px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "ContinentalStagSansW, Arial, sans-serif"
    fontSize: "17.5px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  small:
    fontFamily: "ContinentalStagSansW, Arial, sans-serif"
    fontSize: "14.88px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  none: "0px"
  md: "24px"
  pill: "28px"
  circle: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
---
<!-- stardust:provenance
writtenBy: stardust:extract
writtenAt: 2026-10-08T16:14:06.273Z
readArtifacts:
  - stardust/current/_computed-styles.json
  - stardust/current/_brand-extraction.json
synthesizedInputs: []
-->

## Overview

Continental AG's web presence uses a high-contrast corporate layout built on an `#ffa500` top meta-header band, white navigation bar, full-width hero teasers (`.c-heroteaser-fixed` and `.c-heroteaser--small`), and modular Bootstrap-based content containers (`.o-container` with `.container.container--inner`).

## Colors

- **Primary (`#ffa500`):** Used for the top header bar (`.o-header__meta`), primary CTA buttons, and active highlights.
- **Text & Dark Surface (`#000000`):** Primary typography, headings, icons, and dark footer background.
- **Background (`#ffffff`) & Light Surface (`#f0f0f0`):** Alternating section backgrounds (`.o-container.is-white`, `.o-container.is-lightgray`) and teaser cards.
- **Warm Surface (`#f4cf9b`):** Pastel yellow highlight container (`.o-container.is-pastel-yellow`).
- **Muted Text & Borders (`#6b6b6b`, `#969696`, `#cdcdcd`):** Metadata, breadcrumbs, and structural dividers.

## Typography

All typography renders in `ContinentalStagSansW` (with `Arial, sans-serif` fallback). Headings use weight 400/500 with sizes stepping from `52.5px`/`56px` (H1) to `39.38px`/`32.81px` (H2) and `26.25px` (H3). Body copy renders at `17.5px` (1440px viewport) and `16px`/`15px` on compact viewports.

## Layout

Pages use a full-bleed outer shell with centered `.container` / `.container--inner` content boxes and 12-column Bootstrap flex grids (`.row`, `.col-*`).

## Elevation & Depth

Minimal shadow usage: cards and teasers rely on surface color contrast (`#f0f0f0` on `#ffffff`) rather than heavy drop shadows, with subtle elevation (`rgba(0, 0, 0, 0.4) 0px 0px 3px 0px`) on floating controls.

## Shapes

- Content cards and teasers are sharp-cornered (`0px`).
- Interactive buttons and pill controls use `28px` / `24px` border-radius, and icon buttons use `50%` circles.

## Components

- **Header (`header.o-header`):** Two-tier sticky header with `#ffa500` meta bar (logo, slogan, country selector, language switcher, download cart, quicksearch) and white main navigation bar.
- **Hero Teaser (`.c-heroteaser-fixed`, `.c-heroteaser--small`):** Full-width hero banner with image/slider track and overlay text box.
- **Content Container (`.o-container`):** Modular section wrapper supporting `is-white`, `is-lightgray`, `is-gray`, `is-pastel-yellow`, and `has-image` background variants.
- **Press Release / Story Listing (`.tx_solr`, `.c-cs-article-cluster__container`):** Filterable list or card cluster of editorial/press items.
- **Footer (`footer.o-footer`):** Dark multi-column footer with quicklinks, social web icons, share price teaser, and legal links.

## Do's and Don'ts

- **Do** preserve exact `ContinentalStagSansW` font sizing, line-height, and container padding per breakpoint.
- **Don't** add border-radius to rectangular teaser cards or alter the `#ffa500` header meta bar proportion.
