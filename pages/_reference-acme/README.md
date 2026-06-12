# Reference — original Acme Corp lessons

These are the **original 12 training lessons** from the Acme Corp / loan-origination
workshop, preserved unchanged as a worked example of the site's content patterns.

They are **not part of the active Cowork workshop** — nothing in the nav, sidebar,
or index pages links here. Use them as a reference when authoring new lessons:

- Every page-template element in context (`.page-header`, `.section`, `.module-strip`).
- Every card class the slide engine extracts (`.insight-card`, `.dev-card`,
  `.bp-item`, `.tip-trick`, `.comp-card`, etc.) — see
  [`../../DESIGN-SYSTEM.md`](../../DESIGN-SYSTEM.md) "How slides are generated".

They live at `pages/_reference-acme/` (same directory depth as `pages/training/`) so
their `../../` asset paths to `shared.css`, `nav.js`, and `footer.js` still resolve and
the pages open standalone. `initiative-context.md` (the original Acme domain brief) is
kept here too; the active workshop brief is [`../../cowork-context.md`](../../cowork-context.md).
