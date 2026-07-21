# Axos Cowork — Adoption / Usage Dashboard Brief

A named area of Axos interest. This captures everything known about NG's usage-dashboard work so
Cowork can draft a client-facing one-pager and a how-to outline. **The agreed positioning: deliver
the dashboard as IP Axos's own team implements, with a comprehensive how-to guide** — not a hosted
service NG runs. "Any content we can spin something up with could work."

## Why Axos cares

Leadership wants to see whether Cowork adoption is real and paying off. Anthropic's own KPI is
**weekly active usage trending up**, answered by three recurring questions: *Are people using it?
How deeply? Is it paying off?* A dashboard makes that visible and is a natural artifact of the
"Governance & Adoption" capstone (Module 4 / lesson 15).

## What NG already has (two related efforts — being triangulated)

- **Tony Aug's pipeline (original).** Captures usage **across chat + Cowork + Claude Code**. Built
  for NG's own needs, so it's **more complex than a client delivery requires**. Checking whether it
  lives in a reusable repo. *[INTERNAL: confirm location/reusability before referencing to Axos.]*
- **Carlo González's admin dashboard.** Built in **Databricks**, front-ended with **Streamlit**.
  Currently uses **mocked data** and runs **only on Carlo's local machine** — needs a deployment
  home (no infra access yet; Kevin is the infra/deploy contact).
- **Reference video:** a **2–3 min walkthrough** of the dashboard is embedded in the **Cowork
  Activation slides** — use it as the show-and-tell example on the call.

## How the data actually flows (architecture to teach/hand off)

```
Claude admin (Org settings)
  └─ set an OpenTelemetry (OTel) endpoint   ← applies to ALL users in the org
        └─ usage/event data → Databricks table
              └─ clean / normalize
                    └─ visual / report  (Streamlit app, or Power BI/Databricks dashboard)
```

- **The OTel endpoint is the key enabler:** set once in Claude admin for the whole org; for the NG
  build it points at a **Databricks table**. From there it's "just some cleaning/normalizing" to a
  visual — **the data is the easy part once OTel is on.**
- **Real data path:** enable **OpenTelemetry on the Anthropic account** (vs. the current mocked data).
- **Complementary Anthropic-native sources** (from `../../cowork-context.md`, Module 4): the native
  Analytics dashboard (sessions, DAU/WAU/MAU, T+1) and the **Enterprise Analytics API** (dispatch
  turns — Cowork-exclusive — skill/connector invocations, per-user cost by model; ~3-day delay).
  OTel is the **real-time** stream; the Analytics API is the richer batch source. A good build pulls
  both.

## Known gaps / constraints (shape scope honestly)

- **Microsoft-side data is out of reach today.** Carlo lacks **Microsoft Graph** and **WorkIQ**
  access — so cross-surface Microsoft telemetry can't be piped in yet. **For Axos this is fine:**
  the engagement is **Claude Cowork only**, so the dashboard scopes to **Claude surfaces**
  (Cowork + Chat + Claude Code) via Anthropic OTel/Analytics. Don't promise Microsoft 365 usage data.
- **Deployment is unsolved but not hard** — it's a Streamlit app; it needs a hosting target and infra
  access (Kevin). For Axos, deployment lands **in Axos's environment** under the IP/handoff model.
- **[INTERNAL] Ownership unsettled** — multiple NG people have prototyped; no single owner yet.
  Positioning as **IP + how-to** (Axos implements) sidesteps committing NG to run/host it.

## Recommended positioning for the engagement

Deliver, as part of the 2–4 week engagement:
1. A **reference dashboard** (the Streamlit/Databricks build, scoped to Claude surfaces) seeded with
   mocked data so it's demoable on day one.
2. A **comprehensive how-to guide** so Axos's team stands up the real thing: enable OTel in Claude
   admin → land data in their Databricks (or warehouse) → clean/normalize → publish the visual; plus
   how to pull the Analytics API for cost-by-model and dispatch-turn depth.
3. A short **metrics definition** tied to Anthropic's three questions (active usage, depth, payoff) so
   the numbers map to decisions, not vanity charts.

## [RECONCILE] — repo note

`pages/training/15-analytics-and-adoption.html` currently references an **"Axos Power BI adoption
dashboard"** (`data-client-slot="adoption-dashboard-m4"`), but the actual NG build is
**Databricks + Streamlit** fed by **OTel**. Align the lesson-15 reference (and the dashboard one-pager)
to the real architecture, or state Power BI as an alternative front-end on the same Databricks data.

## Sources

- This engagement's chat thread (2026-06-16): Tony/Carlo/Ilya/Dan on the dashboard.
- `../../cowork-context.md` §Module 4 — Adoption telemetry (native dashboard, Analytics API, OTel).
- The Cowork Activation slides — 2–3 min dashboard walkthrough video.
