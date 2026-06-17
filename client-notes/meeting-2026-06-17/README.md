# Axos Cowork — Meeting Prep (2026-06-17)

Context pack for the **Axos Cowork kickoff/alignment call tomorrow (Tue 2026-06-17)**.
Point Cowork at this folder, then ask it to draft the documents below. These files are
**context, not the deliverables** — they exist so Cowork doesn't have to re-derive the
situation each time.

## How to use this in Cowork

1. Open Cowork and grant it access to this repo folder (or just `client-notes/`).
2. Tell it to read, in order:
   - `meeting-brief.md` — the meeting itself: cast, agenda, goals, open questions.
   - `adoption-dashboard-brief.md` — the usage-dashboard story (a named Axos interest).
   - `../axos.md` and `../axos-change-plan.md` — what NG has already built for Axos.
   - `../../cowork-context.md` — the subject brief (curriculum, facts, sources).
3. Then run one of the prompts below.

> **Audience flag.** `meeting-brief.md` and `adoption-dashboard-brief.md` contain a few
> **NG-internal** notes (e.g. dashboard ownership is still being triangulated). Those are
> marked **[INTERNAL]** — keep them out of anything client-facing.

## Documents to generate (prompts you can paste)

**1. Skeleton workshop timeline & activities** — *Derrikk's deliverable.*
> "Using `meeting-brief.md`, `../axos-change-plan.md`, and `../../pages/workshops/syllabus.html`,
> draft a one-page skeleton timeline for the Axos engagement. Show both cadences (Option A:
> 2 workshops/week over 2 weeks; Option B: 1/week over ~4 weeks), map the four 2-hour
> workshops + pre-work + homework + office hours onto a calendar grid, and leave the business
> team and dates as `[TBD]`. Keep it editable for the call."

**2. Tomorrow's meeting agenda + run-of-show** —
> "From `meeting-brief.md`, produce a clean agenda for the 2026-06-17 call: timed sections,
> who leads each, the objective of each, and the 3–4 decisions we need to leave with."

**3. Discovery questions (pick the pilot team & workflow)** —
> "Draft 8–12 discovery questions for the 'align on the specific business team / goals'
> segment, aimed at choosing one pilot team and their highest-value, repeatable workflow to
> build the engagement around. Group by: team & goals, current workflow & pain, data
> sensitivity, success metrics, stack/access."

**4. Adoption-dashboard one-pager (IP + how-to positioning)** —
> "From `adoption-dashboard-brief.md`, write a client-facing one-pager positioning the usage
> dashboard as IP Axos's team implements, with a how-to guide. Cover: what it shows, the
> architecture (OTel → Databricks → visual), what NG hands over, and what Axos provides. Omit
> anything marked [INTERNAL]."

**5. Admin / enterprise config overview** — *the other named Axos interest.*
> "Using `../../cowork-context.md` (Module 4 facts) and `adoption-dashboard-brief.md`, draft a
> short overview of enterprise/admin configuration for Cowork at Axos: org enablement, SSO/SCIM,
> MDM desktop policy, the OTel endpoint, the Analytics API, and permission/marketplace governance."

**6. Engagement overview / kickoff one-pager** —
> "Summarize what NG delivers for Axos (portal microsite + four 2-hour workshops + skills +
> dashboard IP), the 2–4 week shape, roles (RACI-lite from `../axos-change-plan.md`), and the
> immediate next steps after tomorrow's call."

## Files in this pack

| File | What it holds |
|---|---|
| `meeting-brief.md` | Purpose, cast & roles, agenda, engagement parameters, known vs. open, NG's goals for the call |
| `adoption-dashboard-brief.md` | The usage/adoption dashboard: efforts, architecture, gaps, and the IP + how-to positioning |
| `README.md` | This file — how to drive Cowork and what to generate |
