# Cowork Role Matrix — DRAFT v0.3

Drafted by the pilot team ahead of the control review. **Not reviewed by Identity & Access.**
Internal Audit has asked for this document as evidence of the access design.

---

## 1. Who holds Owner today

We put everyone who needed to administer *anything* into the Owners group — it was faster than
working out the permissions.

| Person | Org role assigned | What they actually need to do |
|---|---|---|
| M. Blake | Owner | Full administration of the whole organization — Primary Owner |
| K. Osei | Owner | Full administration of the whole organization — deputy |
| R. Lindqvist | Owner | Approve invoices and manage the plan. Nothing else. |
| T. Adeyemi | Owner | Pull weekly usage reports for the steering committee. Nothing else. |
| H. Kim | Owner | Add and remove members as people join and leave. Nothing else. |
| J. Alvarez | Owner | Maintain the shared prompt and template library. Nothing else. |

## 2. Groups and roles

| Group | Source | Role | Capabilities listed on the role |
|---|---|---|---|
| `axos-cowork-pilot` | SCIM — **parent group `axos-all-staff`, nested** | Custom | *(none listed — Cowork is already enabled org-wide, so it should come through)* |
| `axos-commercial-lending` | SCIM — direct members | Custom | Cowork, Projects |
| `axos-risk-compliance` | SCIM — direct members | Custom | Cowork, Projects, Web Search |
| `axos-contractors` | Manual | User | — |

## 3. Connectors

| Connector | Setting | Reaches |
|---|---|---|
| Microsoft 365 | **Always allow** | Mail, files, calendar — includes customer and loan folders |
| Zoom | Needs approval | Meeting recordings and transcripts |

## 4. Models

| Setting | Value |
|---|---|
| Models enabled | All models, all effort levels |
| Default model for new conversations | Opus |
| Note | Capital Markets spend is running hot. **Action: monitor Opus spend weekly in the dashboard.** |

## 5. Spend limits

| Group | Monthly limit |
|---|---|
| `axos-cowork-pilot` | $400 / user |
| `axos-capital-markets` | $1,200 / user |

> **Assumption:** people in both groups get the higher limit ($1,200), since permissions are additive.

## 6. Plugin distribution

| Plugin | Install preference | Why it exists |
|---|---|---|
| `axos-credit-memo` | Available | Optional productivity helper for lenders |
| `axos-disclaimer-footer` | **Available** | Appends the mandatory "AI-assisted draft — not final" disclaimer required by Legal on every generated client document |

## 7. Rollout sequencing

1. Enforce the RBAC role assignments above.
2. Then finish the SSO configuration and SCIM sync.
3. Then open the pilot.

---

*Reviewer: ____________________  ·  Date: ____________*
