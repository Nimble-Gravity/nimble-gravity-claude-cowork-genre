# Workshop 2 Pacing & Setup-Recap Feedback Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fold Workshop 1's client feedback (from Chris/Amrita, relayed by Demetra Privette, and the internal facilitator debrief with Ilya Eliashevsky, Holly Leyda, and Derrikk Broughton) into Workshop 2's delivery materials — the facilitator talk track, the on-site agenda, the facilitator guide, and the syllabus — before the next live session.

**Architecture:** This is a content/copy plan, not a code plan — there is no build step or test runner in this repo (static HTML + Markdown scripts). "Tests" below are grep-based content verification, cross-file timing-consistency checks, and a manual visual pass via the local dev server (`./serve`), matching how this repo is actually validated elsewhere.

**Tech Stack:** Static HTML (`pages/workshops/*.html`), Markdown facilitator scripts (`workshop-2-script.md`), shared CSS (`styles/shared.css` — read-only for this plan, no new classes needed).

## Source feedback (what this plan is answering)

1. **Slow down; be comfortable with silence.** Chris/Amrita's core ask (via Demetra). Ilya to Derrikk in the debrief: *"be okay with quiet time... anytime there's dead [air] you try to fill that space."*
2. **Tell → Show → Remind → Show again.** Demetra: *"When showing tasks/activities... 1. Tell what you are going to show 2. Show it 3. Remind them what you just showed them 4. Show them a second time."*
3. **Open Workshop 2 with a real setup recap, protected time.** Demetra: *"Derrikk is going to open with a recap on set up bc some of them struggled with it. Chris said the setup is everything — even if other sessions get shortened or cut."* Ilya in the debrief specifies the actual content: recap where `claude.md`/`about-me` live, show deleting/moving the files out (Cowork loses the personalization), then putting them back (it returns) — directly answering Amrita's literal question, *"where do those files go, man?... are they in my folder? Are they attached to this thing?"*
4. **Less is more.** Ilya: *"littler is better... just do less... it's easier to do less."* One clean example beats several half-explained ones.
5. **Differentiate chat vs. Cowork by putting files in the folder on screen, not dropping them in chat.** Derrikk in the debrief, diagnosing yesterday's confusion: *"we were dropping them in the chat and everybody was asking, can I do this in chat?... we need to differentiate chat and co-work more... put that file in the folder rather than just dropping in the chat."*
6. **A second person reading the room.** Holly: recruiting Demi to *"play the role that Ilya did in terms of monitoring the way people are engaging... do they look like they're struggling?"* — call out a solo-facilitator fallback where there's no second monitor.
7. **Fictional/business-side sample files should read as real Word/Excel files, not raw `.md`, for participant resonance.** Derrikk: *"I think that they understand what a Word document is, not necessarily what a dot ND [MD] file is."* Scoped to a **Phase 2, lower-priority** task (Task 8) — Derrikk already has a same-day manual fallback for tomorrow specifically, and this repo has no build pipeline, so the conversion needs a specific, low-risk, dependency-free approach.

Two items from the source material are **out of scope for this plan** and are not code/content changes:
- **Hold music during genuine dead air** (Ilya: *"put holds music in... share screen with sound"*) — a live-delivery logistics practice. Captured as a Pre-session-prep bullet in Task 1, not a page change.
- **Sending attendees a recap/acknowledgment message tonight** (Demetra's ask, ideally from Demi) — a one-off communication, not a "Workshop 2 delivery" artifact. Not part of this plan; flag separately if wanted.

## Global Constraints

- Keep Workshop 2 timing synced across exactly **four** files: `workshop-2-script.md`, `pages/workshops/module-2-workshop.html` (`#agenda`), `pages/workshops/syllabus.html` (`#w2`), `pages/workshops/facilitator-guide.html` (`#workshop-2`). Every timestamp changed in one must be changed in all four — this mirrors the "Script ↔ on-site sync notes" convention already documented at the bottom of `workshop-2-script.md`.
- Total Workshop 2 runtime stays exactly **120 minutes** end to end. Verify by summing slot minutes after every retime edit.
- Reuse existing CSS classes only (`tip-trick`, `agenda-row`, `agenda-tag`, `dev-card`, `sec-sub`, etc.) — no inline hardcoded hex colors, no new one-off classes, per this repo's CSS Conventions.
- Do not add a second standalone header bar or a top-of-page reading-progress strip to any page — this repo's CLAUDE.md explicitly forbids both.
- Preserve the script's existing legend tags (`[SAY]` `[DO]` `[THEY]` `[NOTE]` `[POLL]`) exactly as-is. Add stage directions as sub-labels inside those tags (`— tell:`, `— show:`, `— remind:`, `— show again:`), matching the file's existing suffix convention (e.g. `[POLL] — usage pulse (drop now):`) — do not invent new bracket tags.
- **Do not run `git commit` as part of executing this plan.** This project's convention is commits only on the user's explicit request — stop after each task's verification step and leave changes for review.

---

## File Structure

| File | Responsibility in this plan |
|---|---|
| `workshop-2-script.md` | The literal talk track a facilitator reads from live. Primary artifact — gets the real content rewrite (setup recap, silence cues, retimed slots, fixed asset-name bug). |
| `pages/workshops/module-2-workshop.html` | Participant-facing hub page. Its `#agenda` block must mirror the script's retimed slots and new Open framing. |
| `pages/workshops/syllabus.html` | Program-wide syllabus. Its `#w2` condensed agenda table must mirror the same retimed slots. |
| `pages/workshops/facilitator-guide.html` | Condensed cross-workshop facilitator reference. Its Workshop 2 section gets a new Open/setup-recap summary and a silence/pacing tip, plus a global pacing tip in the "Hold the shape" section. |
| `assets/demo/sample-legacy-model.md`, `sample-submission-pack.md`, `sample-experience-dataset.md` | Phase 2 only (Task 8) — companion real-format downloads. |
| `pages/workshops/resources.html` | Phase 2 only (Task 8) — updated download links/labels. |

---

## Task 1: Rewrite the Open section + Pre-session prep in `workshop-2-script.md`

**Files:**
- Modify: `workshop-2-script.md:25-52` (Pre-session prep + Run of show table)
- Modify: `workshop-2-script.md:56-84` (Open · 0:00–0:10 section, becomes Open · 0:00–0:20)

**Interfaces:**
- Produces: the new retimed table (`0:00–0:20 Open`, `0:20–0:40 Teach`, `0:40–0:58 Demo`, `0:58–1:06 Discuss`, `1:06–1:11 Break`, `1:11–1:51 Lab`, `1:51–1:57 Debrief`, `1:57–2:00 Close`) that Tasks 2–7 all reference and must not contradict.

- [ ] **Step 1: Replace the Pre-session prep list**

Old (`workshop-2-script.md:25-40`):
```markdown
## Pre-session prep
1. **Stage the demo folder.** Put `sample-legacy-model.md` alone in a clean folder (e.g. `model-demo`). Have the
   **documentation prompt** (below) open to paste.
2. **Load a personalized profile for the demo.** Run the demo on your own profile
   — so the documentation comes back in a practitioner's voice. (No before/after today;
   everyone's already set up from W1.)
3. **Confirm folder access + the least-privilege story.** You'll grant only the submission folder on screen.
4. **Have a prompt-injection line ready** to narrate (see the Demo). Optional: a second doc in the folder for
   a multi-file feel.
5. **Pre-build the Teams polls** so each launches in one click (they're marked **[POLL]** at each slot below):
   - Open — "Since Workshop 1, how much have you used Cowork?" *(single)*
   - Open — "Which best describes your day-to-day work?" *(single)*
   - Discuss — "Which use cases would save you the most time? Pick up to 2." *(multi-select)*
   - Debrief — "How ready do you feel to run a real task on your own?" *(single)*
   - Close — "How useful was today? 1–5." *(single)*
   Export the **Discuss** results after — that ranking is your Workshop 3 skill backlog and Workshop 4 demand data.
```

New:
```markdown
## Pre-session prep
1. **Stage the demo folder.** Put `sample-legacy-model.md` alone in a clean folder (e.g. `model-demo`). Have the
   **documentation prompt** (below) open to paste. One file only — no "second doc for a multi-file feel." A
   single, fully-explained example lands better than two half-explained ones.
2. **Load a personalized profile for the demo.** Run the demo on your own profile
   — so the documentation comes back in a practitioner's voice. (No before/after today;
   everyone's already set up from W1.)
3. **Keep your real Workshop 1 setup folder open too — you'll recap it live.** Don't rebuild a fresh one for
   the demo; open the actual `claude.md` + `about-me/` you set up in Workshop 1 so the recap is real, not staged.
   This is the Open segment's main asset.
4. **Confirm folder access + the least-privilege story.** You'll grant only the submission folder on screen.
5. **Have a prompt-injection line ready** to narrate (see the Demo).
6. **Optional — cue up quiet background audio for genuine dead air** (staging, downloads): share screen with
   sound at low volume if things stall. Do not use it during the Open recap's pauses or lab work time — that
   silence is intentional, not dead air, and playing over it undercuts the point.
7. **If a second person is on the call, ask them to read the room** — chat, reactions, faces on their own
   tile — and privately flag you (Teams chat, facilitator-only) if the pace needs to change. Facilitating
   solo? Build in an explicit check instead: "thumbs-up in chat when that makes sense" before moving on from
   the Open recap.
8. **Pre-build the Teams polls** so each launches in one click (they're marked **[POLL]** at each slot below):
   - Open — "Since Workshop 1, how much have you used Cowork?" *(single)*
   - Open — "Which best describes your day-to-day work?" *(single)*
   - Discuss — "Which use cases would save you the most time? Pick up to 2." *(multi-select)*
   - Debrief — "How ready do you feel to run a real task on your own?" *(single)*
   - Close — "How useful was today? 1–5." *(single)*
   Export the **Discuss** results after — that ranking is your Workshop 3 skill backlog and Workshop 4 demand data.
```

- [ ] **Step 2: Replace the Run of show table**

Old (`workshop-2-script.md:42-52`):
```markdown
### Run of show — the 2-hour agenda
| Time | Slot | Content |
|---|---|---|
| 0:00–0:10 | **Open** | Recap W1 homework + objectives |
| 0:10–0:35 | **Teach** | Use cases (0:10–0:20) · Working effectively (0:20–0:30) · Folder access (0:30–0:35) |
| 0:35–0:55 | **Demo** | Documentation from a legacy model |
| 0:55–1:05 | **Discuss** | Shortlist your use cases |
| 1:05–1:10 | **Break** | — |
| 1:10–1:50 | **Lab** | Use Cowork Lab → a deliverable (40 min) |
| 1:50–1:58 | **Debrief** | Name the recurring part + knowledge check |
| 1:58–2:00 | **Close** | Homework + what's next + feedback |
```

New:
```markdown
### Run of show — the 2-hour agenda
| Time | Slot | Content |
|---|---|---|
| 0:00–0:20 | **Open** | Acknowledge W1 feedback + live setup recap (protected — cut Teach/Discuss before this) |
| 0:20–0:40 | **Teach** | Use cases (0:20–0:30) · Working effectively (0:30–0:40) |
| 0:40–0:58 | **Demo** | Documentation from a legacy model |
| 0:58–1:06 | **Discuss** | Shortlist your use cases |
| 1:06–1:11 | **Break** | — |
| 1:11–1:51 | **Lab** | Use Cowork Lab → a deliverable (40 min) |
| 1:51–1:57 | **Debrief** | Name the recurring part + knowledge check |
| 1:57–2:00 | **Close** | Homework + what's next + feedback |

**Why Open grew and Teach shrank:** Workshop 1 feedback was explicit — slow down, and recap setup before
anything else, even if it costs time elsewhere. The former standalone Folder Access teach slot (5 min) is now
taught live, by demonstration, inside the Open recap — so it isn't dropped, it's just taught once, concretely,
instead of twice. The remaining 5 minutes come from small trims to Demo, Discuss, and Debrief, not from the Lab.
```

- [ ] **Step 3: Replace the Open section body**

Old (`workshop-2-script.md:56-84`, i.e. everything from `## Open · 0:00–0:10 (10 min)` through the line before `## Teach · 0:10–0:35 (25 min)`):
```markdown
## Open · 0:00–0:10 (10 min)
**[SAY] — recap:** "Before we get into today, thirty seconds on where we are in the series. Workshop 1
covered what Cowork is, how it differs from chat, and your first delegation. Today we go deeper: real reinsurance
use cases, how to work effectively without overspending, and a task you will run end to end to a finished
deliverable. The thread across all four workshops: W1 gave you the setup, today gives you the workflow, W3
packages it as a reusable skill, and W4 governs and scales it. Keep that arc in mind as we go."

**[DO] — home base:** "Open the **[Workshop 2 hub](pages/workshops/module-2-workshop.html)** now — that's your
page for today; every lesson, the lab, and the downloads hang off it, and I'll call out which one to open as
we go."

**[POLL] — usage pulse (drop now):** "Since Workshop 1, how much have you used Cowork?" — *Ran a real task, it
saved me time · Tried it, output needed work · Opened it but didn't finish · Haven't yet.*
**[NOTE]** The top-two share is your between-session **adoption number** — the "are people using it?" metric,
live. If most land in the bottom two, spend 60 seconds on the barrier before you move on.

**[SAY]** "Last time you got set up and ran a first delegation. The homework was one more — so let's start
there: **who delegated something this week, and what did it produce?**" **[DO]** Take two or three in voice
or Teams; keep it quick.

**[SAY] — objectives:** "Today is about doing **real work** with Cowork — and doing it **effectively and
safely.** By the end you'll have run a real reinsurance task end to end to a finished deliverable, and you'll
have named the one workflow you'd most want to standardize — because next week we turn it into a skill."

**[POLL] — who's in the room (drop now):** "Which best describes your day-to-day work?" — *Models / analytics
engineering · Application development · Data & platforms · IT ops / support · Architecture / security · Other.*
**[NOTE]** This sets up the two-track lab — anyone maintaining code they want reviewed is your **Track 2**
pool — and tells you which use cases to lean on today.

```

New:
```markdown
## Open · 0:00–0:20 (20 min) — protected: cut Teach or Discuss before you cut this

**[NOTE] — why this got longer:** Chris and Amrita's feedback from yesterday was specific: slow down, and
recap setup before anything else — "even if other sessions get shortened or cut." This block is that recap.
Don't rush it to protect time elsewhere; the retimed agenda already assumes you won't.

**[SAY] — name it, don't apologize for it:** "Before we start today — quick, honest note. Yesterday we moved
fast, and a few of you told us so. That's good feedback and we're acting on it: today we're slowing down on
purpose, and if a pause feels a little long, that's intentional, not a technical problem. So — let's actually
recap setup, properly this time."

**[DO] — tell:** "Here's what I'm about to show you: where your personalization actually lives, and what
happens to Cowork if those files move. Watch the folder, not just the chat window."

**[DO] — show:** Open the folder from your **own real Workshop 1 setup** (not a fresh rebuild — see prep item
3). Show `claude.md` and the `about-me/` folder sitting inside it. **[SAY]** "This is what `/cowork-cosetup`
wrote yesterday — a `claude.md` file and an `about-me/` folder, sitting right here, in this folder, as real
files. Not saved in the chat log. Not floating somewhere in the cloud. Right here." **[DO]** Ask a plain
relevance question — *"Recap what you know about me"* — and read the answer aloud. **[SAY]** "That answer came
from those files, not from memory of our conversation."

**[DO] — remind:** "So — two files, sitting in a folder, and that's the entire reason Cowork just answered
like it knows you. Say it back to me: where do the personalization files live?" Take a one-word answer from
the room ("the folder") before moving on.

**[DO] — show again:** Move `claude.md` and `about-me/` out of the folder (drag to the desktop, or a sibling
folder) while everyone watches. Ask the same question again — *"Recap what you know about me."* **[SAY]**
"Watch — it doesn't know. No profile loaded, because the files aren't in the folder anymore. It's not broken;
it's just reading what's actually there." **[DO]** Move the files back in. Ask the question a third time.
**[SAY]** "And it's back — because I put the files back in the folder. You can move these, copy them, back
them up, delete them and start fresh. Claude still works either way; it just answers *generically* when the
files aren't there, and *like you* when they are."

**[NOTE]** This is also the folder-access lesson, taught live instead of on a slide — you're demonstrating
least privilege and per-folder scope by showing exactly what a folder does and doesn't carry. That's why the
standalone Folder Access teach slot is gone from today's Teach block: you already covered it here, concretely.

**[DO] — home base:** "Open the **[Workshop 2 hub](pages/workshops/module-2-workshop.html)** now — that's your
page for today; every lesson, the lab, and the downloads hang off it, and I'll call out which one to open as
we go."

**[POLL] — usage pulse (drop now):** "Since Workshop 1, how much have you used Cowork?" — *Ran a real task, it
saved me time · Tried it, output needed work · Opened it but didn't finish · Haven't yet.*
**[NOTE]** The top-two share is your between-session **adoption number.** If most land in the bottom two,
that's an expected read after a fast Day 1 — say so, and point at the recap they just watched as the fix, not
a lecture.

**[SAY]** "Who delegated something this week, and what did it produce?" **[DO]** Take two or three in voice or
Teams — then stop talking. Let the answer land before you respond.

**[SAY] — objectives:** "Today is about doing **real work** with Cowork — and doing it **effectively and
safely.** By the end you'll have run a real reinsurance task end to end to a finished deliverable, and you'll
have named the one workflow you'd most want to standardize."

**[POLL] — who's in the room (drop now):** "Which best describes your day-to-day work?" — *Models / analytics
engineering · Application development · Data & platforms · IT ops / support · Architecture / security · Other.*
**[NOTE]** This sets up the two-track lab — anyone maintaining code they want reviewed is your **Track 2**
pool — and tells you which use cases to lean on today.

```

- [ ] **Step 4: Verify the edit**

Run:
```bash
grep -n "0:00–0:20\|0:00–0:10" workshop-2-script.md
```
Expected: `0:00–0:20` appears (table + section header); `0:00–0:10` no longer appears anywhere in the file.

Run:
```bash
grep -c "show again" workshop-2-script.md
```
Expected: `1` (the Open section's persistence demo).

---

## Task 2: Retime the Teach section in `workshop-2-script.md`

**Files:**
- Modify: `workshop-2-script.md` (the `## Teach` section header and its `### Use Cases by Industry` / `### Working Effectively` / `### Folder Access` subsections — originally around old lines 87-136, shifted after Task 1)

**Interfaces:**
- Consumes: the retimed table from Task 1 (`0:20–0:40 Teach`).

- [ ] **Step 1: Retime the Teach header and drop the standalone Folder Access subsection**

Old:
```markdown
## Teach · 0:10–0:35 (25 min)

### Use Cases by Industry · 0:10–0:20 — *follow along: Lesson 4*
```
New:
```markdown
## Teach · 0:20–0:40 (20 min)

### Use Cases by Industry · 0:20–0:30 — *follow along: Lesson 4*
```

Old:
```markdown
### Working Effectively · 0:20–0:30 — *follow along: Lesson 5*
```
New:
```markdown
### Working Effectively · 0:30–0:40 — *follow along: Lesson 5*
```

Old (delete this entire subsection — its content now lives in the Open recap):
```markdown
### Folder Access · 0:30–0:35 — *follow along: Lesson 6*
**[SAY]** "Access is **per folder.** Grant the **one** folder the task needs — never a parent 'to be safe,'
that hands over everything inside it. Within it Cowork reads and writes; it runs any code in an **isolated
VM**; and it **always asks before it permanently deletes.**"

**[SAY] — least privilege ties it together:** "The smallest grant that does the job also **shrinks the blast
radius** if a document tries to redirect Cowork — that's the prompt-injection link. **A folder per task, not
per drive.** This is the control story you'll show IT in Workshop 4."

---
```
Replace with a single closing rule (keep the section-ending `---` divider):
```markdown
**[NOTE]** Folder Access (Lesson 6) is no longer a separate teach slot — you demonstrated it live in the Open
recap (moving `claude.md`/`about-me/` out of and back into the folder). If someone missed the Open recap or
wants the reference version, point them to [Lesson 6](../training/06-folder-access-walkthrough.html) after
the session; don't re-teach it here.

---
```

- [ ] **Step 2: Verify**

Run:
```bash
grep -n "### Folder Access\|0:10–0:35\|0:20–0:30 — \*follow along: Lesson 4\|0:30–0:40 — \*follow along: Lesson 5" workshop-2-script.md
```
Expected: `### Folder Access` and `0:10–0:35` return no matches; the two retimed subsection headers each match once.

---

## Task 3: Retime the Demo section, fix the asset-name bug, add the silence cue

**Files:**
- Modify: `workshop-2-script.md` (the `## Demo` section — originally around old lines 140-166)
- Modify: `workshop-2-script.md` (the "Script ↔ on-site sync notes" footer — originally around old lines 314-321)

**Interfaces:**
- Consumes: the retimed table from Task 1 (`0:40–0:58 Demo`).

**Background — pre-existing bug found while reading this file:** the Demo section currently cites
`assets/demo/sample-submission-pack.md` as its asset, and the sync-notes footer repeats the same claim. Both
are wrong — the actual demo prompt reads "the legacy model" (tabs, macro, rows), which is `sample-legacy-model.md`
(the same file the Pre-session prep stages, and the same file Workshop 1's script and `facilitator-guide.html`
both name). `sample-submission-pack.md` is a different asset (a cedent submission pack) used nowhere in this
demo. Fix this as part of the retime so tomorrow's facilitator isn't pointed at the wrong file.

- [ ] **Step 1: Retime the header, fix the asset reference, and add tell/silence/remind framing**

Old:
```markdown
## Demo · 0:35–0:55 (20 min) — Documentation from a legacy model
*Asset: `assets/demo/sample-submission-pack.md`. Prompt below is on the facilitator guide (and it's the Track 1 tab
on the lab page). **Follow along →** participants watch; the cedent submission downloads from the
[resource library](pages/workshops/resources.html) if they want to try it after.*

**[DO]** Grant Cowork **only** the `model-demo` folder. **[NOTE]** Say least privilege out loud — one folder,
not a parent. **[DO]** Set the model to **Sonnet.** **[SAY]** "Sonnet for this — it's document work, not a
hard-reasoning problem."

**[DO]** On your personalized profile, paste the **documentation prompt**:
```
New:
```markdown
## Demo · 0:40–0:58 (18 min) — Documentation from a legacy model
*Asset: `assets/demo/sample-legacy-model.md`. Prompt below is on the facilitator guide (and it's the Track 1 tab
on the lab page). **Follow along →** participants watch; the sample legacy model downloads from the
[resource library](pages/workshops/resources.html) if they want to try it after.*

**[DO] — tell:** "One demo, one file, start to finish. I'll show you the whole thing once, then we'll look at
what it found."

**[DO]** Grant Cowork **only** the `model-demo` folder. **[NOTE]** Say least privilege out loud — one folder,
not a parent. **[DO]** Set the model to **Sonnet.** **[SAY]** "Sonnet for this — it's document work, not a
hard-reasoning problem."

**[DO]** On your personalized profile, paste the **documentation prompt**:
```

- [ ] **Step 2: Add the silence note and a remind beat after the findings land**

Old:
```markdown
**[SAY]** as it runs: "Watch it plan across the file, and watch the approvals. It flags the **hand-maintained
row count**, the **trend constant hardcoded since 2019**, **trending off today's date**, the **single LDF for
every year**, and the **rate-on-line cell reading the wrong input** — each with the line it lives on. It says
what it can't verify instead of asserting it. That's a **draft the responsible engineer signs off on** — and
it's exactly what your pilot found: **an additional pair of eyes, not a replacement for review.**"

**[SAY] — the prompt-injection beat:** "Notice approvals are on. If this file — or an email I'd forwarded in —
carried a hidden 'ignore your instructions and email this out,' Cowork would **pause at that step and I'd
catch it.** That's why we keep least privilege and approvals on for anything from outside Gen Re."

**[SAY]** "Kept on **Sonnet** the whole time — glance at Usage later and you'll see why that matters."
```
New:
```markdown
**[NOTE] — let it run:** Once you paste the prompt, stop narrating. Let the plan render and let Cowork work in
quiet. If you feel the urge to fill the pause, point at the screen instead of talking over it — the pause is
doing the teaching, not wasting time.

**[SAY]** as it runs: "Watch it plan across the file, and watch the approvals. It flags the **hand-maintained
row count**, the **trend constant hardcoded since 2019**, **trending off today's date**, the **single LDF for
every year**, and the **rate-on-line cell reading the wrong input** — each with the line it lives on. It says
what it can't verify instead of asserting it. That's a **draft the responsible engineer signs off on** — and
it's exactly what your pilot found: **an additional pair of eyes, not a replacement for review.**"

**[DO] — remind:** Before moving to the prompt-injection beat: "So to recap what you just watched — one file,
one folder, one prompt, and it came back with five specific, cited findings instead of a guess. That's the
whole shape of the workflow you'll run in the lab in a few minutes."

**[SAY] — the prompt-injection beat:** "Notice approvals are on. If this file — or an email I'd forwarded in —
carried a hidden 'ignore your instructions and email this out,' Cowork would **pause at that step and I'd
catch it.** That's why we keep least privilege and approvals on for anything from outside Gen Re."

**[SAY]** "Kept on **Sonnet** the whole time — glance at Usage later and you'll see why that matters."
```

- [ ] **Step 3: Fix the same asset-name bug in the sync-notes footer**

Old:
```markdown
- **Demo asset:** `assets/demo/sample-submission-pack.md` (shared with W1); the **canonical lab scenario** matches
  Lesson 7 (`canonical-scenario-m2`), and the **use-case shortlist** matches Lesson 4 (`industry-usecases-m2`).
```
New:
```markdown
- **Demo asset:** `assets/demo/sample-legacy-model.md` (shared with W1); the **canonical lab scenario** matches
  Lesson 7 (`canonical-scenario-m2`), and the **use-case shortlist** matches Lesson 4 (`industry-usecases-m2`).
```

- [ ] **Step 4: Verify**

Run:
```bash
grep -n "sample-submission-pack" workshop-2-script.md
```
Expected: no matches (the file's only prior appearances were the two bugs just fixed; `sample-submission-pack.md`
remains correctly referenced elsewhere, e.g. `resources.html`, which this task does not touch).

Run:
```bash
grep -n "0:35–0:55\|0:40–0:58" workshop-2-script.md
```
Expected: `0:35–0:55` returns no matches; `0:40–0:58` matches the table row and the section header.

---

## Task 4: Retime Discuss/Debrief/Close and add the Facilitator Appendix rules

**Files:**
- Modify: `workshop-2-script.md` (`## Discuss`, `## Debrief`, `## Close`, and `### Facilitator appendix` headers/content — originally around old lines 170, 268, 284, 299)

**Interfaces:**
- Consumes: the retimed table from Task 1 (`0:58–1:06 Discuss`, `1:51–1:57 Debrief`, `1:57–2:00 Close`; Break and Lab are unchanged at `1:06–1:11` / `1:11–1:51`).

- [ ] **Step 1: Retime Discuss, Break, Lab, Debrief headers (content unchanged)**

Old:
```markdown
## Discuss · 0:55–1:05 (10 min) — Shortlist your use cases
```
New:
```markdown
## Discuss · 0:58–1:06 (8 min) — Shortlist your use cases
```

Old:
```markdown
## Break · 1:05–1:10 (5 min)
```
New:
```markdown
## Break · 1:06–1:11 (5 min)
```

Old:
```markdown
## Lab · 1:10–1:50 (40 min) — Use Cowork Lab
```
New:
```markdown
## Lab · 1:11–1:51 (40 min) — Use Cowork Lab
```

Also update the Lab's internal mini-table (same section):
Old:
```markdown
| Time | What |
|---|---|
| 1:10–1:15 | Prompting primer (new) |
| 1:15–1:20 | Stage files, write acceptance test, confirm setup |
| 1:20–1:40 | Use Cases 1 and 2 run (parallel tracks) |
| 1:40–1:50 | Post deliverable, write notes, transition to debrief |
```
New:
```markdown
| Time | What |
|---|---|
| 1:11–1:16 | Prompting primer (new) |
| 1:16–1:21 | Stage files, write acceptance test, confirm setup |
| 1:21–1:41 | Use Cases 1 and 2 run (parallel tracks) |
| 1:41–1:51 | Post deliverable, write notes, transition to debrief |
```

- [ ] **Step 2: Retime Debrief and add the feedback-loop close line**

Old:
```markdown
## Debrief · 1:50–1:58 (8 min) — Debrief + knowledge check
```
New:
```markdown
## Debrief · 1:51–1:57 (6 min) — Debrief + knowledge check
```

- [ ] **Step 3: Retime Close and add the acknowledgment line**

Old:
```markdown
## Close · 1:58–2:00 (2 min) — Homework + what's next
**[SAY] — homework:** "Keep your **deliverable, your acceptance test, and your improvement notes.** Run your
shortlisted use case once more this week, and bring the **one recurring workflow** you'd most want to
standardize — that's what we turn into a skill next time." *(homework recap on the
[pre-work page](pages/workshops/pre-work.html#workshop-2).)*
```
New:
```markdown
## Close · 1:57–2:00 (3 min) — Homework + what's next
**[SAY] — close the loop:** "One more thing before we go — thanks for the direct feedback after yesterday.
That's exactly the kind of thing that makes this useful instead of generic. Keep it coming."

**[SAY] — homework:** "Keep your **deliverable, your acceptance test, and your improvement notes.** Run your
shortlisted use case once more this week, and bring the **one recurring workflow** you'd most want to
standardize — that's what we turn into a skill next time." *(homework recap on the
[pre-work page](pages/workshops/pre-work.html#workshop-2).)*
```

- [ ] **Step 4: Add four rules to the Facilitator appendix**

Old (first bullet, for anchoring — leave it and everything after it in place):
```markdown
### Facilitator appendix
- **Hold the lab.** If you run long, cut the teach, not the lab — the 40 minutes are the value.
```
New:
```markdown
### Facilitator appendix
- **Hold the lab.** If you run long, cut the teach, not the lab — the 40 minutes are the value.
- **Silence is not dead air.** When Cowork is running, or someone's reading the screen, stop talking. A pause
  reads as confidence, not a mistake — this is direct client feedback after Workshop 1's first cohort session.
- **Show it, recap it, show it again.** For any capability that depends on something invisible (a file
  location, a setting, a permission), use the Open recap's shape: tell them what they're about to see, show
  it, say back what just happened, then show it once more from a different angle (in the Open recap, that's
  moving the personalization files out of the folder and back in). Reuse this pattern any time you're teaching
  a hidden mechanism, not just in the Open block.
- **One file beats three.** Don't stack a "for good measure" second file or extra example into a demo. A
  single, fully-explained example lands; two half-explained ones don't.
```

- [ ] **Step 5: Verify**

Run:
```bash
grep -n "0:55–1:05\|1:05–1:10\|1:10–1:50\|1:50–1:58\|1:58–2:00" workshop-2-script.md
```
Expected: no matches (all four old timestamps fully replaced).

Run:
```bash
python3 -c "
import re
mins = re.findall(r'\((\d+) min\)', open('workshop-2-script.md').read())
mins = [int(m) for m in mins[:8]]
print(mins, sum(mins))
"
```
Expected: `[20, 20, 18, 8, 5, 40, 6, 3] 120` (the first eight `(N min)` matches are the eight agenda slots, in
order, from the Run-of-show table headers — confirm the total is exactly `120`).

---

## Task 5: Sync the agenda block on `pages/workshops/module-2-workshop.html`

**Files:**
- Modify: `pages/workshops/module-2-workshop.html:63-110` (the `#agenda` section)

**Interfaces:**
- Consumes: the final retimed table from Tasks 1–4.

- [ ] **Step 1: Update the section intro line**

Old (`module-2-workshop.html:66`):
```html
    <p class="sec-sub">A short teaching block, a reinsurance demo, a use-case shortlist, then a real hands-on task.</p>
```
New:
```html
    <p class="sec-sub">A live setup recap, a short teaching block, a reinsurance demo, a use-case shortlist, then a real hands-on task.</p>
```

- [ ] **Step 2: Replace the eight `.agenda-row` blocks**

Old (`module-2-workshop.html:69-108`, the full `.agenda` div's inner content):
```html
  <div class="agenda">
    <div class="agenda-row">
      <div class="agenda-time">0:00–0:10<small>10 min</small></div>
      <div class="agenda-tag">Open</div>
      <div class="agenda-body"><strong>Recap &amp; objectives</strong><p>Quick share-out of Workshop 1 homework — what did your first delegation produce?</p></div>
    </div>
    <div class="agenda-row">
      <div class="agenda-time">0:10–0:35<small>25 min</small></div>
      <div class="agenda-tag agenda-tag--teach">Teach</div>
      <div class="agenda-body"><strong>Use cases, working effectively, folder access</strong><ul><li><strong>0:10–0:20</strong> <a href="../training/04-use-cases-by-industry.html">By Industry</a> — reinsurance starters from the open-source packs</li><li><strong>0:20–0:30</strong> <a href="../training/05-working-effectively.html">Working Effectively</a> — model choice, permission modes, prompt injection</li><li><strong>0:30–0:35</strong> <a href="../training/06-folder-access-walkthrough.html">Folder Access</a> — least privilege, the isolated VM</li></ul></div>
    </div>
    <div class="agenda-row">
      <div class="agenda-time">0:35–0:55<small>20 min</small></div>
      <div class="agenda-tag agenda-tag--demo">Demo</div>
      <div class="agenda-body"><strong>Live: documentation from a legacy model</strong><p>Facilitator runs the documentation-generation use case on a sample legacy Excel/VBA model — model choice, folder scope, and a cited defect list. See the <a href="facilitator-guide.html#workshop-2">facilitator guide</a>.</p></div>
    </div>
    <div class="agenda-row">
      <div class="agenda-time">0:55–1:05<small>10 min</small></div>
      <div class="agenda-tag agenda-tag--discuss">Discuss</div>
      <div class="agenda-body"><strong>Shortlist your use cases</strong><p>Which of the reinsurance use cases fit your week? Each person picks two; the room ranks the top few.</p></div>
    </div>
    <div class="agenda-row">
      <div class="agenda-time">1:05–1:10<small>5 min</small></div>
      <div class="agenda-tag agenda-tag--break">Break</div>
      <div class="agenda-body"><strong>Break</strong></div>
    </div>
    <div class="agenda-row">
      <div class="agenda-time">1:10–1:50<small>40 min</small></div>
      <div class="agenda-tag agenda-tag--lab">Lab</div>
      <div class="agenda-body"><strong>Use Cowork Lab</strong> · <a href="../training/07-use-cowork-lab.html">open the lab →</a><ul><li>Prompting primer — five principles before you write your first prompt</li><li>Stage a real task's files in one folder, grant access, write the acceptance test</li><li>Run your track on Sonnet with approvals on (Track 1: documentation generation · Track 2: technical review); finish a deliverable</li></ul><p class="agenda-cue">Facilitator: hold the line on least-privilege folders and approvals for outside content.</p></div>
    </div>
    <div class="agenda-row">
      <div class="agenda-time">1:50–1:58<small>8 min</small></div>
      <div class="agenda-tag">Debrief</div>
      <div class="agenda-body"><strong>Debrief &amp; knowledge check</strong><p>Name the recurring part of your task; then the <a href="../training/07-use-cowork-lab.html">Workshop 2 knowledge check</a> at the end of the lab.</p></div>
    </div>
    <div class="agenda-row">
      <div class="agenda-time">1:58–2:00<small>2 min</small></div>
      <div class="agenda-tag">Close</div>
      <div class="agenda-body"><strong>Optional follow-up &amp; what's next</strong><p>See your <a href="pre-work.html#workshop-2">homework</a>; Workshop 3 is Build a Skill. Then a <a href="feedback.html">2-minute feedback</a>.</p></div>
    </div>
  </div>
```
New:
```html
  <div class="agenda">
    <div class="agenda-row">
      <div class="agenda-time">0:00–0:20<small>20 min</small></div>
      <div class="agenda-tag">Open</div>
      <div class="agenda-body"><strong>Setup recap</strong><p>A live, real recap of where your Workshop 1 personalization files live and what happens if they move — plus a share-out of your homework delegation.</p></div>
    </div>
    <div class="agenda-row">
      <div class="agenda-time">0:20–0:40<small>20 min</small></div>
      <div class="agenda-tag agenda-tag--teach">Teach</div>
      <div class="agenda-body"><strong>Use cases and working effectively</strong><ul><li><strong>0:20–0:30</strong> <a href="../training/04-use-cases-by-industry.html">By Industry</a> — reinsurance starters from the open-source packs</li><li><strong>0:30–0:40</strong> <a href="../training/05-working-effectively.html">Working Effectively</a> — model choice, permission modes, prompt injection</li></ul></div>
    </div>
    <div class="agenda-row">
      <div class="agenda-time">0:40–0:58<small>18 min</small></div>
      <div class="agenda-tag agenda-tag--demo">Demo</div>
      <div class="agenda-body"><strong>Live: documentation from a legacy model</strong><p>Facilitator runs the documentation-generation use case on a sample legacy Excel/VBA model — model choice, folder scope, and a cited defect list. See the <a href="facilitator-guide.html#workshop-2">facilitator guide</a>.</p></div>
    </div>
    <div class="agenda-row">
      <div class="agenda-time">0:58–1:06<small>8 min</small></div>
      <div class="agenda-tag agenda-tag--discuss">Discuss</div>
      <div class="agenda-body"><strong>Shortlist your use cases</strong><p>Which of the reinsurance use cases fit your week? Each person picks two; the room ranks the top few.</p></div>
    </div>
    <div class="agenda-row">
      <div class="agenda-time">1:06–1:11<small>5 min</small></div>
      <div class="agenda-tag agenda-tag--break">Break</div>
      <div class="agenda-body"><strong>Break</strong></div>
    </div>
    <div class="agenda-row">
      <div class="agenda-time">1:11–1:51<small>40 min</small></div>
      <div class="agenda-tag agenda-tag--lab">Lab</div>
      <div class="agenda-body"><strong>Use Cowork Lab</strong> · <a href="../training/07-use-cowork-lab.html">open the lab →</a><ul><li>Prompting primer — five principles before you write your first prompt</li><li>Stage a real task's files in one folder, grant access, write the acceptance test</li><li>Run your track on Sonnet with approvals on (Track 1: documentation generation · Track 2: technical review); finish a deliverable</li></ul><p class="agenda-cue">Facilitator: hold the line on least-privilege folders and approvals for outside content.</p></div>
    </div>
    <div class="agenda-row">
      <div class="agenda-time">1:51–1:57<small>6 min</small></div>
      <div class="agenda-tag">Debrief</div>
      <div class="agenda-body"><strong>Debrief &amp; knowledge check</strong><p>Name the recurring part of your task; then the <a href="../training/07-use-cowork-lab.html">Workshop 2 knowledge check</a> at the end of the lab.</p></div>
    </div>
    <div class="agenda-row">
      <div class="agenda-time">1:57–2:00<small>3 min</small></div>
      <div class="agenda-tag">Close</div>
      <div class="agenda-body"><strong>Optional follow-up &amp; what's next</strong><p>See your <a href="pre-work.html#workshop-2">homework</a>; Workshop 3 is Build a Skill. Then a <a href="feedback.html">2-minute feedback</a>.</p></div>
    </div>
  </div>
```

- [ ] **Step 3: Verify**

Run:
```bash
grep -n "0:00–0:10\|0:10–0:35\|Folder Access" pages/workshops/module-2-workshop.html
```
Expected: no matches.

Run:
```bash
./serve &
sleep 1
curl -s http://localhost:8000/pages/workshops/module-2-workshop.html | grep -o "agenda-time\">[^<]*" 
kill %1
```
Expected: eight time ranges printed, matching the new table exactly, in order.

---

## Task 6: Sync the condensed Workshop 2 table on `pages/workshops/syllabus.html`

**Files:**
- Modify: `pages/workshops/syllabus.html:83-90` (the `#w2` agenda rows)

**Interfaces:**
- Consumes: the final retimed table from Tasks 1–4.

- [ ] **Step 1: Replace the eight condensed rows**

Old (`syllabus.html:83-90`):
```html
    <div class="agenda-row"><div class="agenda-time">0:00–0:10</div><div class="agenda-tag">Open</div><div class="agenda-body"><strong>Recap + objectives</strong></div></div>
    <div class="agenda-row"><div class="agenda-time">0:10–0:35</div><div class="agenda-tag agenda-tag--teach">Teach</div><div class="agenda-body"><strong>Use cases · Working effectively · Folder access</strong></div></div>
    <div class="agenda-row"><div class="agenda-time">0:35–0:55</div><div class="agenda-tag agenda-tag--demo">Demo</div><div class="agenda-body"><strong>Documentation from a legacy model</strong></div></div>
    <div class="agenda-row"><div class="agenda-time">0:55–1:05</div><div class="agenda-tag agenda-tag--discuss">Discuss</div><div class="agenda-body"><strong>Shortlist your use cases</strong></div></div>
    <div class="agenda-row"><div class="agenda-time">1:05–1:10</div><div class="agenda-tag agenda-tag--break">Break</div><div class="agenda-body"><strong>Break</strong></div></div>
    <div class="agenda-row"><div class="agenda-time">1:10–1:50</div><div class="agenda-tag agenda-tag--lab">Lab</div><div class="agenda-body"><strong>Use Cowork Lab → a deliverable</strong></div></div>
    <div class="agenda-row"><div class="agenda-time">1:50–1:58</div><div class="agenda-tag">Debrief</div><div class="agenda-body"><strong>Debrief + Workshop 2 quiz</strong></div></div>
    <div class="agenda-row"><div class="agenda-time">1:58–2:00</div><div class="agenda-tag">Close</div><div class="agenda-body"><strong>Optional follow-up + what's next</strong></div></div>
```
New:
```html
    <div class="agenda-row"><div class="agenda-time">0:00–0:20</div><div class="agenda-tag">Open</div><div class="agenda-body"><strong>Setup recap</strong></div></div>
    <div class="agenda-row"><div class="agenda-time">0:20–0:40</div><div class="agenda-tag agenda-tag--teach">Teach</div><div class="agenda-body"><strong>Use cases · Working effectively</strong></div></div>
    <div class="agenda-row"><div class="agenda-time">0:40–0:58</div><div class="agenda-tag agenda-tag--demo">Demo</div><div class="agenda-body"><strong>Documentation from a legacy model</strong></div></div>
    <div class="agenda-row"><div class="agenda-time">0:58–1:06</div><div class="agenda-tag agenda-tag--discuss">Discuss</div><div class="agenda-body"><strong>Shortlist your use cases</strong></div></div>
    <div class="agenda-row"><div class="agenda-time">1:06–1:11</div><div class="agenda-tag agenda-tag--break">Break</div><div class="agenda-body"><strong>Break</strong></div></div>
    <div class="agenda-row"><div class="agenda-time">1:11–1:51</div><div class="agenda-tag agenda-tag--lab">Lab</div><div class="agenda-body"><strong>Use Cowork Lab → a deliverable</strong></div></div>
    <div class="agenda-row"><div class="agenda-time">1:51–1:57</div><div class="agenda-tag">Debrief</div><div class="agenda-body"><strong>Debrief + Workshop 2 quiz</strong></div></div>
    <div class="agenda-row"><div class="agenda-time">1:57–2:00</div><div class="agenda-tag">Close</div><div class="agenda-body"><strong>Optional follow-up + what's next</strong></div></div>
```

**Note:** leave the Workshop 1, 3, and 4 agenda blocks in this same file untouched — this task only touches the
`#w2` section (lines 78-93 wrap it; only the eight rows inside change).

- [ ] **Step 2: Verify**

Run:
```bash
sed -n '/id="w2"/,/id="w3"/p' pages/workshops/syllabus.html | grep -o 'agenda-time">[^<]*'
```
Expected: eight time ranges printed, matching Task 5's Step 3 output exactly.

---

## Task 7: Update `pages/workshops/facilitator-guide.html` — Workshop 2 section + global pacing tip

**Files:**
- Modify: `pages/workshops/facilitator-guide.html:27-48` (the global "Hold the shape" section)
- Modify: `pages/workshops/facilitator-guide.html:89-121` (the Workshop 2 section header through the Demo block)

**Interfaces:**
- Consumes: the final retimed table from Tasks 1–4 and the setup-recap talk track from Task 1.

- [ ] **Step 1: Add a global silence/pacing tip after the "Hold the shape" blueprint grid**

Old (`facilitator-guide.html:31-48`, anchor on the closing of the `bp-grid--light` div):
```html
  <div class="bp-grid--light" style="margin-top:24px;">
    <div class="bp-item">
      <div class="bp-num">01</div>
      <div class="bp-title">Every session ends in a deliverable</div>
      <div class="bp-body">Without it, people use Cowork like chat. Make the lab a real delegation that produces a document, memo, or plan.</div>
    </div>
    <div class="bp-item">
      <div class="bp-num">02</div>
      <div class="bp-title">Teach cost discipline early</div>
      <div class="bp-body">Default to Sonnet; reserve Opus for genuinely hard reasoning. Say it in Workshop 1 and repeat it.</div>
    </div>
    <div class="bp-item">
      <div class="bp-num">03</div>
      <div class="bp-title">Tally the room live</div>
      <div class="bp-body">The maturity poll is client-only — it shows each person their own answer. Ask for a show of hands per level and pitch the session to the middle.</div>
    </div>
  </div>
</div>
```
New:
```html
  <div class="bp-grid--light" style="margin-top:24px;">
    <div class="bp-item">
      <div class="bp-num">01</div>
      <div class="bp-title">Every session ends in a deliverable</div>
      <div class="bp-body">Without it, people use Cowork like chat. Make the lab a real delegation that produces a document, memo, or plan.</div>
    </div>
    <div class="bp-item">
      <div class="bp-num">02</div>
      <div class="bp-title">Teach cost discipline early</div>
      <div class="bp-body">Default to Sonnet; reserve Opus for genuinely hard reasoning. Say it in Workshop 1 and repeat it.</div>
    </div>
    <div class="bp-item">
      <div class="bp-num">03</div>
      <div class="bp-title">Tally the room live</div>
      <div class="bp-body">The maturity poll is client-only — it shows each person their own answer. Ask for a show of hands per level and pitch the session to the middle.</div>
    </div>
  </div>

  <div class="tip-trick" style="margin-top:28px;">
    <div class="tip-trick-icon">🤫</div>
    <div class="tip-trick-copy">
      <div class="tip-trick-label">Be comfortable with silence</div>
      <p>When Cowork is running, or someone's reading the screen, stop talking — don't narrate over it and don't fill the pause. A pause reads as confidence to the room, not a mistake. For any capability that depends on something invisible (a file location, a setting), use the shape: tell them what you're about to show, show it, say back what just happened, then show it again from a different angle. This is direct client feedback from Workshop 1's first cohort session — see <code>workshop-2-script.md</code>'s Open block for the full worked example.</p>
    </div>
  </div>
</div>
```

- [ ] **Step 2: Add the Open/setup-recap summary and retime the Demo header in the Workshop 2 section**

Old (`facilitator-guide.html:90-108`):
```html
<div class="section" id="workshop-2">
  <div class="sec-eyebrow">Workshop 2 · Use Cowork</div>
  <h2 class="sec-title">Demo, tracks, and <em>timing</em></h2>

  <h3 style="margin-top:28px;font-size:19px;color:var(--navy);">Demo (20 min) — Documentation from a legacy model</h3>
  <p class="sec-sub">Asset: <code>assets/demo/sample-legacy-model.md</code> — a synthetic Excel/VBA treaty-pricing model with planted defects. Stage: put <code>sample-legacy-model.md</code> alone in a clean folder, for example <code>model-demo</code>. Grant Cowork only that folder and say "least privilege" out loud when you do it. Set the model to Sonnet.</p>
```
New:
```html
<div class="section" id="workshop-2">
  <div class="sec-eyebrow">Workshop 2 · Use Cowork</div>
  <h2 class="sec-title">Demo, tracks, and <em>timing</em></h2>

  <h3 style="margin-top:28px;font-size:19px;color:var(--navy);">Open (20 min) — Setup recap, protected</h3>
  <p class="sec-sub">Workshop 1 feedback was explicit: slow down, and recap setup before anything else — even if it costs time elsewhere. Open your own real Workshop 1 folder on screen (not a fresh rebuild) and run the pattern once: <strong>tell</strong> them what you're about to show, <strong>show</strong> the <code>claude.md</code> + <code>about-me/</code> files answering a relevance question, <strong>remind</strong> them what just happened, then <strong>show it again</strong> — move the files out of the folder and ask the same question so the room watches Cowork lose the personalization, then move them back and watch it return. This also covers folder access live, so the standalone Folder Access teach slot is gone from today's Teach block. Full talk track in <code>workshop-2-script.md</code>.</p>

  <h3 style="margin-top:28px;font-size:19px;color:var(--navy);">Demo (18 min) — Documentation from a legacy model</h3>
  <p class="sec-sub">Asset: <code>assets/demo/sample-legacy-model.md</code> — a synthetic Excel/VBA treaty-pricing model with planted defects. Stage: put <code>sample-legacy-model.md</code> alone in a clean folder, for example <code>model-demo</code>. Grant Cowork only that folder and say "least privilege" out loud when you do it. Set the model to Sonnet. Tell them what you're about to show before you paste the prompt; once the output lands, say back what you just showed before moving to Discuss.</p>
```

- [ ] **Step 3: Verify**

Run:
```bash
grep -n "Demo (20 min)\|Setup recap, protected\|Be comfortable with silence" pages/workshops/facilitator-guide.html
```
Expected: `Demo (20 min)` returns no matches (it's now `Demo (18 min)`); the other two strings each match once.

Run:
```bash
./serve &
sleep 1
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8000/pages/workshops/facilitator-guide.html
kill %1
```
Expected: `200`.

---

## Task 8 (Phase 2, lower priority — not required for the next session): Real-format companion downloads

**Files:**
- Create: `assets/demo/sample-legacy-model.docx`, `assets/demo/sample-submission-pack.docx` (via `textutil`, from a temporary clean HTML rendering — no new dependency; `textutil` is a built-in macOS tool, confirmed present at `/usr/bin/textutil`)
- Create: `assets/demo/sample-experience-dataset.csv` (hand-authored from the existing `.md` table data — it's already tabular, no conversion tool needed)
- Modify: `pages/workshops/resources.html`, `pages/workshops/facilitator-guide.html`, `pages/workshops/module-1-workshop.html`, `pages/training/07-use-cowork-lab.html`, `pages/training/02-getting-set-up.html` (swap the participant-facing download links to the new companion files; keep the `.md` files in place as the git-diffable source of truth for future edits)

**Why this is Phase 2:** Derrikk's own read in the debrief was that this is a same-day manual fix he can do himself with Cowork if needed ("I have them as MD files, I can easily pivot them into actual files") — it is not the client-facing commitment tomorrow's session hinges on, unlike Tasks 1–7. This repo also has no build pipeline (per its own CLAUDE.md: "No build step, no framework, no package manager"), so a real fix here needs a specific, low-risk, dependency-free method — that's what this task defines, but it should run only after Tasks 1–7 are verified and only if there's time before the next session.

- [ ] **Step 1: Render a clean HTML version of the legacy-model narrative for conversion**

`textutil` converts HTML → `.docx` with real headings/bold preserved (converting the raw `.md` directly would leave literal `#`/`**` characters visible in Word, defeating the point). Write a throwaway HTML file, then convert it, then delete the throwaway:

```bash
python3 -c "
import re
src = open('assets/demo/sample-legacy-model.md').read()
# Strip the fictional-sample callout blockquote for the docx version — keep body content only
body = re.sub(r'> \*\*FICTIONAL.*?training\.\n', '', src, flags=re.S)
lines = body.split(chr(10))
html = ['<html><body>']
for line in lines:
    if line.startswith('## '):
        html.append(f'<h2>{line[3:]}</h2>')
    elif line.startswith('# '):
        html.append(f'<h1>{line[2:]}</h1>')
    elif line.strip().startswith('- '):
        html.append(f'<p>{line.strip()}</p>')
    elif line.strip():
        html.append(f'<p>{line}</p>')
html.append('</body></html>')
open('/tmp/sample-legacy-model.html', 'w').write(chr(10).join(html))
"
textutil -convert docx /tmp/sample-legacy-model.html -output assets/demo/sample-legacy-model.docx
rm /tmp/sample-legacy-model.html
```

- [ ] **Step 2: Verify the docx is real and openable**

Run:
```bash
file assets/demo/sample-legacy-model.docx
```
Expected output contains `Microsoft Word 2007+` (confirms a valid OOXML `.docx`, not a renamed text file).

Run:
```bash
textutil -convert txt assets/demo/sample-legacy-model.docx -output /tmp/roundtrip.txt && head -5 /tmp/roundtrip.txt && rm /tmp/roundtrip.txt
```
Expected: readable plain text starting with the model's title line — confirms the docx round-trips cleanly.

- [ ] **Step 3: Repeat Steps 1-2 for `sample-submission-pack.md` → `sample-submission-pack.docx`**

Same script shape as Step 1, source file `assets/demo/sample-submission-pack.md`, output
`assets/demo/sample-submission-pack.docx`. Same verification as Step 2.

- [ ] **Step 4: Hand-author `sample-experience-dataset.csv`**

Read `assets/demo/sample-experience-dataset.md`, extract its tabular loss-ratio/combined-ratio/segment data into
a real `.csv` (comma-separated, one header row, no markdown table pipes). Verify with:
```bash
python3 -c "import csv; rows = list(csv.reader(open('assets/demo/sample-experience-dataset.csv'))); print(len(rows), 'rows'); print(rows[0])"
```
Expected: a row count matching the source table's data rows + 1 header, and a header row with real column names.

- [ ] **Step 5: Swap the participant-facing download links**

In each of `pages/workshops/resources.html`, `pages/workshops/facilitator-guide.html`,
`pages/workshops/module-1-workshop.html`, `pages/training/07-use-cowork-lab.html`,
`pages/training/02-getting-set-up.html`: find every `href="../../assets/demo/sample-legacy-model.md"` and change
the `href` to `sample-legacy-model.docx` (adjusting the relative path prefix already used at that call site — do
not change the prefix depth, only the filename and extension); same pattern for
`sample-submission-pack.md` → `.docx` and `sample-experience-dataset.md` → `.csv`. Update visible link text that
says "sample legacy model" etc. to stay accurate (no `.md`/`.docx` needs to appear in the visible text — the
existing copy like "Download the sample legacy model ↓" already doesn't name the extension, so most links need
only the `href` swapped, not the label). Leave `maya-profile/claude.md` and any `SKILL.md` links untouched —
those are genuinely markdown-native (Cowork's own instruction-file format), not participant-facing narrative.

- [ ] **Step 6: Verify no remaining participant-facing `.md` download links point at the three converted files**

Run:
```bash
grep -rn "sample-legacy-model\.md\|sample-submission-pack\.md\|sample-experience-dataset\.md" pages/ workshop-1-script.md workshop-2-script.md
```
Expected: no matches in `pages/` for participant-facing download `href`s (facilitator-script mentions of the
`.md` filename as the *staged file on disk* — e.g. "Put `sample-legacy-model.md` alone in a clean folder" — are
fine to leave as-is; the facilitator stages the real source file locally regardless of what participants
download).

---

## Task 9: Final cross-file consistency pass

**Files:** none modified — verification only, across all files touched in Tasks 1-7.

- [ ] **Step 1: Confirm all four synced files agree on every Workshop 2 timestamp**

Run:
```bash
echo "--- script ---"; grep -oE '[0-9]:[0-9]{2}–[0-9]:[0-9]{2}' workshop-2-script.md | sort -u
echo "--- hub ---"; grep -oE '[0-9]:[0-9]{2}–[0-9]:[0-9]{2}' pages/workshops/module-2-workshop.html | sort -u
echo "--- syllabus w2 ---"; sed -n '/id="w2"/,/id="w3"/p' pages/workshops/syllabus.html | grep -oE '[0-9]:[0-9]{2}–[0-9]:[0-9]{2}' | sort -u
echo "--- facilitator guide ---"; grep -n "min)" pages/workshops/facilitator-guide.html
```
Expected: the script and hub sets are identical 8-element sets (`0:00–0:20`, `0:20–0:40`, `0:40–0:58`,
`0:58–1:06`, `1:06–1:11`, `1:11–1:51`, `1:51–1:57`, `1:57–2:00`); the syllabus set matches the same 8 boundary
times; the facilitator guide shows `(20 min)` for Open and `(18 min)` for Demo.

- [ ] **Step 2: Full-repo scan for any leftover old timestamps or the fixed bug**

Run:
```bash
grep -rn "0:10–0:35\|0:35–0:55\|0:55–1:05\|1:50–1:58\|1:58–2:00" pages/workshops/module-2-workshop.html pages/workshops/syllabus.html pages/workshops/facilitator-guide.html workshop-2-script.md
grep -rn "sample-submission-pack" workshop-2-script.md
```
Expected: both commands return no output.

- [ ] **Step 3: Visual pass on the local dev server**

Run:
```bash
./serve
```
Open `http://localhost:8000/pages/workshops/module-2-workshop.html#agenda` and
`http://localhost:8000/pages/workshops/facilitator-guide.html#workshop-2` in a browser. Confirm: the agenda
table renders eight rows with no `undefined`/broken markup, times run consecutively with no gaps or overlaps,
and the new "Setup recap" / "Be comfortable with silence" copy reads cleanly at both light and normal zoom.

- [ ] **Step 4: Stop — do not commit**

Per this plan's Global Constraints, leave all changes uncommitted for review. Report the full `git status` /
`git diff --stat` to the user and let them decide on commit message and scope.

---

## Self-Review

**Spec coverage** — every numbered feedback item from the "Source feedback" section maps to a task:
1. Silence → Task 1 (Open recap pauses), Task 3 (Demo silence cue), Task 4 (Facilitator appendix rule), Task 7 (global tip-trick).
2. Tell/Show/Remind/Show-again → Task 1 (Open section, full worked example), Task 3 (Demo section), Task 4 (appendix rule generalizing the pattern), Task 7 (facilitator-guide summary).
3. Protected setup recap → Task 1 (rewritten Open, retimed to 20 min and explicitly marked protected), Tasks 5/6/7 (synced everywhere the agenda appears).
4. Less is more → Task 1 (pre-session prep: no second demo file), Task 4 (appendix rule).
5. Files-in-folder vs. chat → Task 1 (Open section explicitly narrates "not saved in the chat log... right here" while showing the folder).
6. Room reader / solo fallback → Task 1 (pre-session prep item 7).
7. Real file formats → Task 8 (explicitly scoped Phase 2, with rationale for the lower priority).
Hold music and the attendee recap email are explicitly logged as out-of-scope in the "Source feedback" section
with the reasoning, per the Scope Check.

**Placeholder scan** — every step above contains literal old/new text or a literal runnable command; no
"TBD"/"add appropriate copy"/"similar to Task N" placeholders remain.

**Type/reference consistency** — the retimed table introduced in Task 1 Step 2 (`0:00–0:20` ... `1:57–2:00`) is
the single source of truth every later task's old/new blocks were written against; Task 9 Step 1 is the
explicit cross-check that they didn't drift while drafting. The Task 3 asset-name fix (`sample-legacy-model.md`,
not `sample-submission-pack.md`) is applied in both places it appeared (Demo header + sync-notes footer) and
confirmed absent repo-wide relevant scope in Task 9 Step 2.

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-07-27-workshop-2-pacing-feedback.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**
