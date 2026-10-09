# Font Licensing Notice

> **WARNING: FONT LICENSING REQUIRED BEFORE GOING LIVE**
> Confirm commercial webfont embedding license with Continental AG before publishing to a production domain.

| File | Family | Weight | Foundry / Owner | Status |
|---|---|---|---|---|
| `fonts/ContinentalStagSans-Light.woff2` | Continental Stag Sans | 300 | Continental AG / Commercial Type | Proprietary — self-hosted for replica parity; verify license before production |
| `fonts/ContinentalStagSans-Book.woff2` | Continental Stag Sans | 400 | Continental AG / Commercial Type | Proprietary — self-hosted for replica parity; verify license before production |
| `fonts/ContinentalStagSans-Medium.woff2` | Continental Stag Sans | 500 | Continental AG / Commercial Type | Proprietary — self-hosted for replica parity; verify license before production |

## Fallback Removal Path

If webfont embedding licensing cannot be confirmed for a target host, delete `fonts/ContinentalStagSans-*.woff2` and the `@font-face` declarations in `styles/fonts.css`. All stacks in `styles/styles.css` automatically fall back to the metric-matched `"continental-stag-sans-fallback"` (`local("Arial")`) face with zero layout shift.
