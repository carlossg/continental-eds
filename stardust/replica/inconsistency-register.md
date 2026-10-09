# Inconsistency register — www.continental.com replica

No entries — pure replica. Everything not listed here is frozen; any design
delta found by the gate is a defect, not an improvement.

## Cap-probe observations (deferred — preserved as-is on source templates)

## R-01 — Template-specific contentMaxWidth (1920px shell vs 1460px inner container)

- **Evidence:** `cap-probe.mjs` across `/en/`, `/en/press/press-releases/`, `/en/press/press-contacts/` (`DESIGN.json#extensions.breakpoints.capRegister`)
- **Finding:** Outer `div.o-page` shell is capped at `1920px` while inner `.o-container__content.container` is capped at `1460px`, and pagination wrap `ul.c-pagination__wrap` is capped at `552px`.
- **Minimal change:** Preserve each template's exact source caps (`1920px` outer shell, `1460px` inner container, `552px` pagination wrap); no change applied.
- **Status:** deferred
- **Where:** `landing`, `listing`, `static`
