# Workshop 4 — Govern & Roll Out · Facilitator Script
### Claude Cowork · 2 hours, hands-on · virtual (Teams screen-share, participants hands-on)

> **Conforms to the on-site agenda** (`pages/workshops/module-4-workshop.html`, `syllabus.html`,
> `facilitator-guide.html#workshop-4`). Same 8-slot shape as W1/W2/W3: **Open · Teach · Demo · Discuss ·
> Break · Lab · Debrief · Close.** **Branch:** `client-axos` — **Claude Cowork only.**

**Outcome:** every participant leaves (1) able to explain Axos's Cowork access model and audit position
to someone who has to sign off on it, and (2) holding a one-page control narrative they produced under
a clock in **The Control Room** — the 40-minute escape-room lab.

**This is the session with IT and compliance in the room.** The content pivoted to governance, RBAC,
analytics, and setup practice for exactly that reason. Plugins are covered in five minutes as the
*unit of governed distribution*, not as an authoring topic — that was Workshop 3.

**Demo assets:** the Claude admin console (Organization settings → Roles) and
`control-room/lab-files/analytics-export.csv` open in a viewer.

**Lab assets:** six files distributed before breakout rooms open — on the
[capstone page](pages/training/16-the-control-room.html) and the workshop hub.

**Legend:** **[SAY]** talk track · **[DO]** live demo · **[THEY]** participants act · **[NOTE]** facilitator note · **[POLL]** Teams poll · **[>>]** color commentary — the WHY behind the step

---

## ⚠️ Read this first — the date-sensitive fact

Everything in the governance half of this session was **re-verified against Anthropic's documentation
on 2026-07-21**. The decisive fact — *"the Compliance API and Audit Logs do not cover Claude Cowork
yet"* — is quoted from Anthropic's own Cowork Enterprise Administrator Guide.

**Before you present:** re-check that quote and the RBAC details against the Sources block in
`cowork-context.md`. Anthropic is actively closing this gap, and a compliance audience will know if
you are a release behind. If it has closed, say so and pivot the framing to "here is what changed" —
the lab still works, because Lock 4's checklist tests whether you can *state your audit position*,
not whether the gap exists.

---

## Pre-session prep

1. **Have admin console access ready.** The Demo builds a Custom role live. If you cannot get admin
   access to a real tenant, use the screenshots in the facilitator guide and narrate — but say out
   loud that you're using screenshots. This audience notices.
2. **Pre-build the W3 quiz poll.** The Open runs the Workshop 3 knowledge check live — 4 questions in
   Teams, built the day before.
3. **Pull the Skill Vault leaderboard from W3.** Name the teams that escaped. It takes ten seconds and
   buys you the room's attention.
4. **Pre-recruit your IT/compliance partner for the Discuss slot.** DM them the day before: *"I'd like
   you to open the discussion on which Axos workloads shouldn't run in the Cowork interface — 90
   seconds, no prep."* This is the highest-stakes discussion of the series and it must not open cold.
5. **Distribute lab files.** Share all six in Teams chat *before* the break:
   `cowork-access-register.csv`, `least-privilege-rubric.md`, `role-matrix-DRAFT.md`,
   `rbac-reference.md`, `analytics-export.csv`, `exam-checklist.txt`.
   **Note:** unlike W3, nothing needs installing before the clock starts — teams only need the six
   files in one folder they can grant Cowork access to.
6. **Open the [facilitator view](control-room/admin.html).** Keep it in a side window during the lab.
   **Local-only mode this cohort** — it shows teams that played *in your browser*, so treat the badge
   at the top as the source of truth and lean on breakout-room check-ins for progress.

### Run of show — the 2-hour agenda
| Time | Slot | Content |
|---|---|---|
| 0:00–0:10 | **Open** | W3 knowledge check live + vault callback + welcome IT |
| 0:10–0:33 | **Teach** | Package (0:10–0:15) · RBAC (0:15–0:23) · Set Up & Govern (0:23–0:29) · Analytics (0:29–0:33) |
| 0:33–0:52 | **Demo** | Live: build a Custom role, then read the telemetry |
| 0:52–1:04 | **Discuss** | Which Axos workloads leave the Cowork interface? + team announcements |
| 1:04–1:10 | **Break** | Staging break — file confirm |
| 1:10–1:50 | **Lab** | The Control Room — 40-minute escape room |
| 1:50–1:58 | **Debrief** | One share per team + knowledge check |
| 1:58–2:00 | **Close** | Homework + program wrap + feedback |

---

## Open · 0:00–0:10 (10 min)

**[DO] — W3 quiz live (4 min):** Launch the pre-built Workshop 3 knowledge-check poll. Read each
answer aloud as results land. Brisk — this is a loop-close, not a review.

**[DO] — vault callback (1 min):** Name the teams that escaped the Skill Vault and their times.

**[>>]** *Why open on last week's game?* W4 is the session most at risk of feeling like a lecture — it
is the compliance session, and half the room is here because governance is their job. Opening on the
scoreboard from a game they enjoyed establishes that today ends the same way. Without that signal,
participants settle into passive-listening mode during Teach and never fully come back.

**[SAY] — welcome the new people:** "Some of you are joining for the first time today — IT, security,
compliance. You're not late to this; **this is your session.** The last three workshops taught knowledge
workers to delegate real work to Cowork. Today we answer the question you've been waiting to ask:
*under what controls?*"

**[SAY] — arc reminder:** "Workshop 1 you got set up. W2 you ran a real task. W3 you packaged it into a
skill. Today: who's allowed to run it, what we can prove about it, and how we know it's working. And
then you'll do a control review under a 40-minute clock."

**[SAY] — the honest framing, say this early:** "One thing I want on the table before we start.
Cowork has a real audit-coverage gap today, and I'm going to show you exactly where it is — in
Anthropic's own words. We're not going to talk around it. The question this session answers isn't
'is it perfect' — it's **'can we run it responsibly and prove we did.'**"

**[>>]** *Naming the gap in the first five minutes is a deliberate credibility play.* If a compliance
participant discovers the audit gap themselves at minute 40, you have lost them — it reads as though
you were selling around it. If you name it at minute 4, every subsequent control you describe reads as
a considered response rather than a defence. This single move is the difference between a session that
ends in a rollout plan and one that ends in an escalation.

**[DO] — home base:** "Open the **[Workshop 4 hub](pages/workshops/module-4-workshop.html)** — all five
lessons, the lab, and the file pack hang off it."

---

## Teach · 0:10–0:33 (23 min)

### Package It as a Plugin · 0:10–0:15 (5 min) — *follow along: Lesson 1*

**[SAY]** "Five minutes on plugins, because today they matter for one reason only: **a plugin is the
unit an administrator can control.** A skill is a folder. A plugin is a bundle — skills, connectors,
sub-agents, commands, hooks — and critically, it's the thing your admin can *require*, *offer*, or
*hide* from a specific group. That's why it's in the governance session."

**[SAY]** "Two ways to stand up a private marketplace: ZIP upload while you're iterating, GitHub sync
when you want version control — syncs take up to half an hour, cap of 100 plugins, 50 MB per file."

**[>>]** *Resist the urge to re-teach plugin authoring here.* In previous runs this slot expanded to
fifteen minutes and ate the RBAC content. The business users already built skills in W3, and the IT
partners don't need authoring detail — they need to know that a plugin is an administrable object.
If you're running long anywhere in Teach, this is the slot to compress further, not RBAC.

---

### Roles & Access · 0:15–0:23 (8 min) — *follow along: Lesson 2*

**[SAY] — the headline:** "Claude Enterprise gives you three static roles — User, Admin, Owner — plus
one Primary Owner. And Anthropic is absolute about Owner: *'Owners and Primary Owners always have full
access to all features.'* **There is no way to narrow an Owner.** So the moment you hand someone Owner
because they need to pull a report, you've given them everything."

**[SAY] — the tool you actually want:** "**Custom roles**, at Organization settings → Roles. A Custom
role grants a named set of capabilities and admin areas to a group. Six admin areas — Identity &
Access, Billing, Analytics, Privacy, User Management, Libraries — each set to No access, Can view, or
Can manage. So *'she pulls usage numbers for the steering committee'* is a role. It is not an Owner seat."

**[SAY] — the misconfiguration everyone makes.** Quote it directly:
> *"Members assigned to custom roles don't automatically inherit organization-enabled capabilities.
> Every capability a 'Custom' role member needs must be explicitly granted."*

"Read that twice. You enable Cowork org-wide. You create a Custom role for the pilot group. Nobody in
the pilot group can use Cowork — because the role didn't list it. The org toggle is the *ceiling*.
The role is the *grant*."

**[>>]** *This is the single most useful thing you will say all day.* It is the defect that burns a
morning of a real rollout, it is Lock 2 of the lab, and it is the kind of specific, operational detail
that convinces an IT audience you've actually deployed this rather than read a brochure. Say it slowly
and let someone write it down.

**[SAY] — three tabs:** "**Capabilities** — per-feature toggles for Cowork, Claude Code, Web Search,
Memory, Projects, Code Execution. That's your phased rollout mechanism: enable Cowork for the pilot
group and nobody else. **Connectors** — Always allow, Needs approval, or Blocked, per tool if you want.
One catch: connector settings are *organization-wide*, no per-group control, so the strictest
requirement governs everyone. **Models** — enable or disable models, cap effort levels, set the
default. Remember that tab; it comes back in the analytics section."

**[SAY] — two rules that surprise everyone:** "Nested IdP groups **don't sync** — only direct members.
A group inheriting membership from a parent group arrives empty. And permission math: capabilities are
**additive**, a user in several groups gets the union. But **spend limits are the opposite — the most
restrictive limit wins.** A second group never loosens a cap."

**[SAY] — sequencing:** "SSO first, then RBAC. Always. Enforcing roles against an identity source that
hasn't settled is how administrators lock themselves out of their own tenant."

---

### Set Up & Govern · 0:23–0:29 (6 min) — *follow along: Lesson 3*

**[SAY] — the setup sequence:** "Six steps, and the order matters. Enable the capability. Bind identity
— SSO then SCIM. Deploy the desktop app through Intune — and on Windows, **use the MSIX installer, not
the .exe.** Lock the edges: network egress allowlists, mount controls, desktop extension allowlists.
Publish the approval and folder policy. Set spend limits and model caps *at setup*, not after the first
invoice."

**[SAY] — the control that matters most:** "Folder scope. Users pick which folders Cowork can read and
write. **There are no per-file permissions.** So the grant *is* the control, and least privilege means
picking a narrow project folder instead of a drive root. That one decision contains more risk than
everything else on the slide."

**[SAY] — the gap, precisely.** Read Anthropic's words verbatim:
> *"the Compliance API and Audit Logs do not cover Claude Cowork yet."*

"Cowork is excluded from **Audit Logs, the Compliance API, and Data Exports** — every tier, Enterprise
included. History lives locally on the machine. For context, Anthropic shipped the Compliance API in
May with 28 integrations including Purview, Okta, and CrowdStrike. Cowork just isn't in its scope yet."

**[NOTE]** Date-stamp it out loud: *"Verified against Anthropic's documentation on 21 July 2026.
Re-verify before you circulate anything."*

**[SAY] — what compensates:** "Three planes. **Control plane** — the Compliance API, covering tenant
administration. **Agent plane** — OpenTelemetry, the closest thing to session visibility you have.
**Network plane** — an on-device proxy or LLM gateway, which is your DLP hook, because native DLP
alerting on Cowork conversations isn't available. A shared user account identifier lets you correlate
across them."

**[SAY] — and the routing decision:** "Some work needs zero retention or centralized audit *today*.
That work does not belong in the Cowork interface — route it to the API or Claude Code Enterprise.
Deciding that per workload, in writing, with a named example, is what turns awareness into a control."

---

### Analytics & Adoption · 0:29–0:33 (4 min) — *follow along: Lesson 4*

**[SAY] — three surfaces, three jobs:** "**Admin dashboard** — is anyone using it? Sessions and active
users at T+1. **Analytics API**, Enterprise only — who, how deeply, at what cost: per-user activity,
DAU/WAU/MAU, skill and connector rankings, per-user cost by model. **OpenTelemetry** — what actually
happened: tool calls, files read and modified, skills used, and whether each action was approved
manually or auto-initiated."

**[SAY] — the setup gotcha:** "OTel emits nothing until you configure it. Anthropic's words: *'events
are only exported when an admin configures an OTLP endpoint. No data flows by default.'* Organization
settings → Cowork, OTLP endpoint, protocol, auth headers."

**[SAY] — the thing to flag to a bank:** "That stream carries **prompt text and file paths** into your
SIEM. That's a data-handling decision in its own right. Scope the sink, restrict who can query it, and
write it into the control narrative."

**[SAY] — the three questions:** "Weekly, then monthly. Are people using it? How deeply? Is it paying
off? Weekly active usage trending up is the headline."

---

## Demo · 0:33–0:52 (19 min) — Build a role, then read the telemetry

**[SAY]** "Two things in nineteen minutes. First I'll build the access control. Then I'll show you how
you find out whether it's working. Everything you're about to see is a lock in the Control Room."

**[>>]** *"Everything you're about to see is a lock" — say this line.* It is the W3 transition that
worked, and it does the same job here: it converts the demo from something participants watch into
something they know they'll be graded on in thirty minutes. Attention in the Demo slot measurably
determines how many teams clear Lock 2.

### (a) Build a least-privilege Custom role (10 min)
**[DO]** Admin console → Organization settings → Roles → create a Custom role.
- Name it something like `cowork-pilot-analyst`.
- **Grant capabilities explicitly** — narrate this: *"Watch me tick Cowork on. If I skip this, this role
  gets nothing, even though Cowork is on org-wide."*
- Set **Analytics: Can view**, everything else No access. *"That's the steering-committee reporter. One
  area. Not an Owner."*
- Show the **Connectors** tab: set M365 to **Needs approval**. *"Anything reaching customer or loan data."*
- Show the **Models** tab: cap effort / disable Opus for this group. *"Hold that thought."*
- Attach it to a **SCIM group**. Point at the group source: *"Direct members. If this were a nested group
  it would arrive empty and I'd spend a morning wondering why."*

**[>>]** *What to do if you can't get admin access.* Narrate over screenshots and say so plainly. Do not
fake a live console. An IT audience can tell, and the credibility cost is far higher than the polish gain.

### (b) Read the telemetry (9 min)
**[DO]** Open `control-room/lab-files/analytics-export.csv` on screen — this is the same file they'll use
in Lock 3, which is intentional.

**[SAY]** "Last week, twelve weekly active users. Now watch what one column tells me." Walk the model
column by department. "Capital Markets is running about **88% of its dispatch turns on Opus.** Every
other desk is under a quarter. And look at the cost column — Capital Markets is more than every other
department combined."

**[SAY] — the payoff, and the whole point of the demo:** "Now: what do you do about it? The wrong answer
is a line in the steering minutes that says 'monitor Opus spend weekly.' **The right answer is the
Models tab I showed you eight minutes ago.** A cap. That's the difference between a finding and a
remediation — and it's why RBAC and analytics are the same lesson, not two."

**[>>]** *This is the intellectual spine of the whole workshop — do not rush it.* Governance sessions fail
when controls and measurement are taught as separate domains, because participants leave able to produce
a dashboard and unable to act on it. The Opus example is deliberately chosen: it's financially concrete,
it appears in their own lab data twenty minutes later, and the fix is a setting they watched you open.
If participants remember one structural idea from Workshop 4, it should be *measurement points at a control.*

---

## Discuss · 0:52–1:04 (12 min) — What leaves the Cowork interface? + teams

*Pre-recruited IT/compliance partner goes first.*

**[SAY]** "Here's the question I want in the open, with IT and compliance in the room. Given what I just
showed you about audit coverage — **which Axos workloads should not run in the Cowork interface today?**"

**[DO]** Call your pre-recruited partner: *"[Name], 90 seconds — where would you draw that line?"* Then
take two or three more from the room. Capture answers in the chat or on a shared slide; **these become
Lock 4 material** for several teams.

**[SAY] — seed it if the room is quiet:** "Think about anything with a retention obligation. Anything
where you'd need to reproduce the full interaction for an examiner. Anything touching material
non-public information. Those are candidates for the API or Claude Code Enterprise instead."

**[>>]** *Why this discussion and not a plugin-candidates discussion?* The old W4 asked which skills
should become team plugins — a fine question that the wrong half of the room can answer. This one puts
the business users and the compliance partners in genuine dialogue, and it produces the exact artifact
Lock 4 scores (checklist item 3 requires a named workload routed to an audited surface). Teams that
engage here finish the lab meaningfully faster.

**[SAY] — the reframe to land before the break:** "Notice what we just did. We didn't decide whether
Cowork is safe. We decided **which work goes where.** That's what a governance decision actually looks
like, and it's what your one-pager has to show."

**[DO] — Control Room team announcements (4 min):** "You'll play in teams of 2–4. **Mix the teams — put
an IT or compliance person with the business users.** One person drives Cowork and shares their screen;
everyone else advises. Two hints per lock: first is free, second adds 2 minutes. Wrong codes cost nothing
but time. Forty minutes." Announce breakout assignments and drivers.

**[>>]** *Insist on mixed teams.* Lock 1 and Lock 3 favour business users comfortable delegating to
Cowork; Lock 2 favours whoever knows what SCIM is. Homogeneous teams stall on one of the two. Mixed
teams also produce the cross-functional conversation that the rollout actually needs — which is,
quietly, the real deliverable of this workshop.

---

## Break · 1:04–1:10 (6 min)

**[DO]** "During the break: confirm all **six** lab files are downloaded into one folder you can grant
Cowork access to. Open the [Control Room](control-room/) in a new tab — not the lesson page. Find your
breakout room. Decide who drives."

**[>>]** *Staging break, not a rest break — same as W3.* Teams arriving without files staged burn five
minutes of a forty-minute clock. Confirm in Teams chat before you open the clock; wait the extra 60
seconds for stragglers rather than starting with file-less teams.

---

## Lab · 1:10–1:50 (40 min) — The Control Room

*Follow along: Lesson 5. Open at [control-room/](control-room/) — participants in breakouts. Keep the
[facilitator view](control-room/admin.html) open (local-only this cohort — see prep note 6).*

**[DO]** "The Control Room is open. Clock starts when your team enters a name. One driver in Cowork, the
rest advising. Game in one window, Cowork in the other. Go."

**[>>]** *Why an escape room for governance content?* The same three reasons it worked in W3, plus one
specific to this material. The clock stops teams over-polishing; the team mechanic means fast thinkers
carry slower ones; and every code is gated on a real control. The addition here: governance content is
the easiest material in the program to *nod along to and not absorb*. Nobody argues with "apply least
privilege." Making them count seven actual violations in a real register converts agreement into skill.

### The four locks — what to watch for

**Lock 1 — The Access Map (delegate an access review):**
**[NOTE]** Teams test 18 grants against a 4-rule rubric. **Answer: 7 non-compliant rows; the worst
offender is in Commercial Lending.** Common failure: counting *violations* instead of *rows* — the
rubric says count each row once, and teams that miss that line get 10 or 11. Redirect: *"Re-read the
counting instruction in the rubric."*

**[>>]** *What Lock 1 teaches.* That an access review is a real, delegable piece of work — and that
folder scope is where the risk actually lives. Teams that scope their own Cowork grant to just the lab
folder without being told have already understood the lesson.

**Lock 2 — The Broken Role Matrix (repair the RBAC design):**
**[NOTE]** Seven defect areas; the code needs two of them. **Answer: 4 people move off Owner** (two of
the six genuinely administer the org), **and the mandatory-disclaimer plugin must be Required.** Common
failure: teams count all six Owners, or count only the obviously-wrong ones. Push them to the "what they
actually need to do" column — anyone whose need maps to exactly one of the six admin areas gets a
Custom role.

**[>>]** *Lock 2 is the highest-transfer lock, exactly as Room 2 was in the vault.* After repairing this
matrix, participants will never again hand out Owner casually, and they will never again forget that
Custom roles grant nothing implicitly. If a team is stuck past the 20-minute mark, give hint 1 free.

**Lock 3 — Read the Room (author a skill, run it on the export):**
**[NOTE]** Teams author a `cowork-adoption-review` skill with four prescribed sections, then run it on
the export. **Answer: Capital Markets, 12 weekly active users.** Two common failures: (a) computing
Opus share across the whole file instead of per department, and (b) counting *rows* or *sessions*
instead of distinct users. Both are caught by the "sanity-check by hand" step — push teams to it.

**[>>]** *Lock 3 is the W3 callback.* It is the only lock that asks them to author a skill, and it
deliberately reuses the discipline they learned in the vault — prescribe the output shape, don't
describe it. Teams that write a vague skill get a drifting readout and can't find the number.

**Lock 4 — The Control Narrative (chain everything + QA):**
**[NOTE]** Teams fold all three artifacts into a one-page control narrative and score it against a
9-item checklist. **The door only opens on a clean sweep: 9 and the verdict word.** Most first drafts
fail items 2, 6, and 7 — the three monitoring planes, the explicit-capability-grant rule, and naming
the OTel collector plus the no-data-by-default caveat.

**Two failure modes — know which you're looking at:**
- **A — they're arguing with the checklist.** "Item 3 doesn't apply to us." It does; the checklist is
  the spec. Redirect: *"The checklist is the examiner. Add the sentence."*
- **B — they're writing prose instead of answering items.** A beautiful page that fails four items.
  Redirect: *"Score it first, then write to the gaps. The checklist is your outline."*

**[>>]** *Lock 4 is where the capstone deliverable actually gets produced* — the one-pager that used to
be a quiet writing exercise is now the final door. That's the whole design of the pivot: the artifact a
sponsor needs is the thing that lets them out of the room. Teams will iterate three or four times, and
each iteration is a real editing pass on a real governance document.

**[NOTE — pacing]** If a team hasn't cleared Lock 2 by the 15-minute mark, drop a hint in their breakout
chat. If a team is in Lock 4 at the 35-minute mark with no code, tell them to score before they polish.
**At 1:47 — 3 minutes left — call time** and ask each team to note where they stopped.

---

## Debrief · 1:50–1:58 (8 min) — One share per team + knowledge check

**[SAY]** "One share per team — what's one line in your control narrative you'd actually defend to an
examiner? Thirty seconds each."

**[SAY] — the meta-lesson, say each one and pause:** "Here's what the Control Room was really testing.
**Lock 1:** least privilege is a folder decision, and it's reviewable. **Lock 2:** delegation is a
Custom role, not an Owner seat — and capabilities are never inherited. **Lock 3:** measurement is only
useful if it points at a control. **Lock 4:** you don't defend a rollout with evidence, you defend it
with a position — written down, owned, and dated."

**[>>]** *Same reason as W3: consolidate or the puzzle overwrites the principle.* An escape room leaves
a vivid memory of the game and a fuzzy memory of the content unless you name the discipline behind each
door explicitly. This matters more in W4 than W3, because the people who most need the principle — the
IT and compliance partners — are the ones least likely to have driven the keyboard.

**[THEY]** "Two minutes — run the **Workshop 4 knowledge check** at the bottom of Lesson 5. Do it now
while it's fresh." *(6 questions, 4 to pass.)*

---

## Close · 1:58–2:00 (2 min) — Homework + program wrap

**[SAY] — homework:** "The Control Room used a synthetic Axos pilot. Your homework uses the real one.
Export your own Cowork folder grants and run the Lock 1 review against the rubric. Map your pilot group
to Custom roles. Then score your real control narrative against `exam-checklist.txt` until all nine
items pass — and take it to your sponsor."

**[SAY] — the re-verify warning, don't skip it:** "One last thing, and it's the most important sentence
of the day for the compliance people in the room. Everything I told you about audit coverage was
verified on **21 July 2026**. Anthropic is actively closing that gap. **Before your control narrative
goes to a committee, re-check it and re-date the page.** A governance document with a stale date is the
one finding you cannot argue with."

**[SAY] — program wrap:** "That's the full program. You can explain Cowork, use it on real work, build
skills the way Anthropic recommends, package and distribute them under access control, and govern and
measure the whole thing — including being honest about where the audit coverage ends. That's an
enablement practice, not a tool rollout."

**[DO]** Drop the **[final feedback](pages/workshops/feedback.html)** link, the
**[cheat sheet](pages/workshops/cheat-sheet.html)**, and
**[My Progress](pages/workshops/my-progress.html)** for certificates. Mention office hours and that
champions take it from here.

---

### Facilitator appendix

**Hold the lab.** If you run long, cut from Teach — compress the plugin slot, then the analytics slot.
**Never cut RBAC, and never cut the audit-gap quote.** The 40 minutes in the Control Room are where the
value lands.

**Answer key (do not share):**
| Lock | Code | Derivation |
|---|---|---|
| 1 · The Access Map | `7Commercial` | 7 non-compliant rows; worst offender (4 rules) is C. Duarte, Commercial Lending |
| 2 · The Broken Role Matrix | `4Required` | 4 of 6 Owners move to Custom roles; disclaimer plugin must be Required |
| 3 · Read the Room | `Capital12` | Capital Markets ≈88.7% Opus share; 12 distinct weekly active users |
| 4 · The Control Narrative | `9Ready` | All 9 checklist items pass → verdict READY |

Codes are case- and whitespace-insensitive. Hint 1 free; hint 2 costs +2 min.
Reset is available per team in the facilitator view.

**Top risks:**
- **Lab files not staged.** Confirm in Teams chat during the break. Six files, one folder.
- **A team grants a real data folder.** Redirect to the lab folder — and note the irony out loud; it's
  a teaching moment for Lock 1.
- **Someone challenges the audit-gap claim.** Good. Show them the quote and the date. If Anthropic has
  shipped coverage since 21 July 2026, concede immediately and reframe: the lab tests whether you can
  *state* your audit position, which is still required.
- **A compliance participant wants to litigate policy in the room.** Acknowledge, capture it for the
  Discuss slot or office hours, and move — this session is 2 hours and the lab is not compressible.
- **Local-only leaderboard confusion.** The facilitator view only sees teams from your browser this
  cohort. Rely on breakout check-ins; say so up front so nobody thinks the board is broken.

**Closes the program:**
- Capture the Control Room results and the strongest control narratives — those are the seeds of the
  Axos governance one-pager NG delivers.
- Note which workloads the Discuss slot flagged for audited surfaces; that list is a deliverable in
  its own right.
- Anyone who cleared Lock 2 quickly is an RBAC champion. Name them to the sponsor.

### Script ↔ on-site sync notes
- **Agenda** matches `module-4-workshop.html` / `syllabus.html` (8 slots, 2 hours) and
  `facilitator-guide.html#workshop-4`.
- **Lesson map:** 12 Package It as a Plugin · 13 Roles & Access · 14 Set Up & Govern ·
  15 Analytics & Adoption · 16 The Control Room (lab + knowledge check).
- **Lab assets:** six files from `control-room/lab-files/` — confirmed downloaded before break.
- **Facilitator view:** `control-room/admin.html` — open throughout the lab slot.
- **Governance facts** quoted in Teach were verified against Anthropic's documentation on
  **2026-07-21**; the Sources block in `cowork-context.md` has the references. Re-verify each cohort.
- **Deepens W3:** Lock 3 reuses the skill-authoring discipline from the Skill Vault (prescribe the
  output shape); the Open callbacks the vault leaderboard. Continuity is intentional.
