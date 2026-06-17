# Axos Cowork — Kickoff/Alignment Call (Tue 2026-06-17)

Brief for the first working call with Axos on the Cowork enablement engagement. Bridges the
prior Corey/Ilya conversations into an active engagement and aligns on the specific business
team and goals so NG can tailor from there. **First engagement of this kind; client pushed to
start ASAP, so format stays flexible.**

## Purpose & desired outcomes

- Reconnect the prior Axos conversations to "why we're here now" and introduce the delivery team.
- Hear, in Axos's words, **what they want to get out of this** (Steve/Nick).
- **Decide the pilot: which business team, and their goals** — the single most important output;
  everything downstream (use cases, the lab workflow, the dashboard scope) tailors from it.
- Agree a rough shape and cadence (2 weeks intensive vs. ~4 weeks weekly) and immediate next steps.

## Cast & roles

### Nimble Gravity
| Who | Role on this engagement |
|---|---|
| **Corey** | Existing Axos relationship; opens by bridging the last conversation into now |
| **Ilya Eliashevsky** | Co-leads context-setting with Corey; convening the team |
| **Dan Cokely** | Customizing the microsite; brings a proposed timeline + workshop agenda to the call |
| **Derrikk Broughton** | Owns the **skeleton timeline of workshops & activities** (this prep) |
| **Tony Aug** | Built NG's original usage-telemetry pipeline (chat + Cowork + Claude Code) — see dashboard brief |
| **Carlo González** | Built the Databricks/Streamlit admin dashboard (mocked data, local) — see dashboard brief |
| **Kevin** | Infra/deploy help (Streamlit hosting) |
| *"New NG team"* | Introduced on the call (delivery team beyond Corey/Ilya) — **[CONFIRM who's named]** |

### Axos
| Who | Role |
|---|---|
| **Steve** | Speaks to what Axos wants out of the engagement |
| **Nick** | Speaks to what Axos wants out of the engagement |
| **Pilot business team** | **[TBD — primary decision for this call]** |

## Engagement parameters (as understood today)

- **Length:** 2 weeks at the short end, up to **2–4 weeks**.
- **Format (already built by NG):** a **portal microsite** + **four 2-hour, facilitator-led
  workshops** (one per module), with pre-work, homework, office hours, and a facilitator guide.
  See `../axos.md` and `pages/workshops/syllabus.html`.
- **Cadence options** (decide with Axos — detail in `../axos-change-plan.md`):
  - **Option A — Intensive:** 2 workshops/week over 2 weeks (~4-week OCM envelope).
  - **Option B — Weekly (preferred if calendars allow):** 1/week over ~4 weeks (~6-week envelope).
- **Track:** **Claude Cowork only** on this branch (Copilot Cowork stripped). The M365
  *connector* stays (Claude Cowork → M365 data).
- **Named areas of Axos interest beyond the core curriculum:**
  1. **Adoption / usage dashboards** — see `adoption-dashboard-brief.md`.
  2. **Admin / enterprise configuration** — org settings, SSO/SCIM, MDM, OTel, Analytics API,
     marketplace/permission governance (Module 4 / lesson 14–15 territory).

## Agenda (Ilya's framing — refine into a run-of-show)

1. **Corey & Ilya — context bridge.** Last Axos conversation → why we're here now.
2. **New NG team intro.**
3. **Steve/Nick (Axos) — what they're looking to get out of it.**
4. **Align on the specific business team / goals** → tailor the engagement from there.

## What's already in hand (so we present from strength)

- A working **Axos-branded microsite/portal**: 4 modules × (2 lessons + 1 lab) = 15 lessons,
  four 2-hour workshop hubs, syllabus, pre-work, resources, facilitator guide, FAQ, manager kit,
  Why-Cowork / Rules-of-the-Road change-management front door, my-progress + certificate.
- Banking-framed seed use cases (credit memo, deposit/treasury summary, fraud/AML triage,
  portfolio loan comparison) and a canonical lab (commercial loan file → one-page credit summary).
- A **compressed OCM/change-management plan** sized to 2–4 weeks (`../axos-change-plan.md`).
- A **usage-dashboard concept** with a reference video and a working (mocked-data) build.

## Open questions to resolve (drive the discovery segment)

- **Which business team is the pilot, and what's their #1 repeatable, high-value workflow?**
- Data sensitivity of that workflow (drives Claude-Cowork-local vs. routing guidance).
- Cadence: Option A (2 wks) or Option B (~4 wks)? Dates? Cohort size?
- Stack confirm: Microsoft 365? Which Claude products licensed (Cowork, Claude Code, API)?
- How deep do they want to go on **admin/enterprise config** and the **dashboard** — awareness,
  or a hands-on build/handoff?
- Named **executive sponsor**; Legal/Compliance/InfoSec sign-off path for Rules of the Road.
- Branding inputs (logo, colors, memo letterhead) to de-genericize the portal.

## [INTERNAL] — keep out of client-facing docs

- Dashboard **ownership isn't settled** ("multiple people dabbling… not sure who owns this") —
  NG is triangulating across Tony's pipeline and Carlo's build. Don't over-commit specifics to
  Axos until that's resolved; positioning it as **IP + how-to guide they implement** is the safe ask.
- "New NG team" names to be confirmed before introductions.
