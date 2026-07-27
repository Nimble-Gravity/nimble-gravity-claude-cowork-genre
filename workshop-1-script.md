# Workshop 1 — Setup & Foundations · Facilitator Script
### Claude Cowork · 2 hours, hands-on · virtual (Teams screen-share, participants hands-on)

> **Conforms to the on-site agenda** (`pages/workshops/module-1-workshop.html`, `syllabus.html`,
> `facilitator-guide.html#workshop-1`). This is the detailed spine under the facilitator guide — same
> 8-slot shape: **Open · Teach · Demo · Discuss · Break · Lab · Debrief · Close.**
> **Branch:** `client-genre` — **Claude Cowork only** (no Copilot; the audit gap is *managed*).

**Outcome:** every participant leaves with (1) Cowork personalized to their role (`claude.md` + `about-me/`),
and (2) **one real delegation run end-to-end that produced a deliverable.**

**Demo asset:** the **sample legacy model** (`assets/demo/sample-legacy-model.md`) + the **exact prompt** are on the
[facilitator guide](pages/workshops/facilitator-guide.html) and in the [resource library](pages/workshops/resources.html).

**Legend:** **[SAY]** talk track · **[DO]** live demo · **[THEY]** participants act · **[NOTE]** facilitator note

---

## Pre-session prep
1. **Stage the demo folder.** Download `sample-legacy-model.md`, put it alone in a clean folder (e.g.
   `model-demo`). Have the **exact prompt** open to paste.
2. **Set up the before/after.** You'll demo as the **Maya Chen** persona (card below), not your own profile.
   Have a **cold path** ready for the "before" — a session with **no profile loaded** (cleared global
   instructions, no `about-me/`). Decide whether you'll run co-setup **live** as Maya in the demo, or
   **pre-build** her profile beforehand and show only a short live snippet (safer on time). Either way, keep
   the persona card open to read from. A **ready-made copy** of Maya's `claude.md` + `about-me/` lives in
   `assets/demo/maya-profile/` (and the resource library) — drop it in for an instant "after."
3. **Connector status:** the M365 connector is **not enabled at Gen Re — under IT Security review**. Run
   everything local-folder-first; if asked, say exactly that and move on.
4. **Know the fallback:** `/cowork-cosetup` **runs fine with no connectors** — it just asks more
   questions instead of pre-filling. Nothing breaks.

### Run of show — the 2-hour agenda
| Time | Slot | Content |
|---|---|---|
| 0:00–0:10 | **Open** | Welcome, objectives, maturity poll |
| 0:10–0:35 | **Teach** | What Is Cowork? (0:10–0:22) · Get Set Up (0:22–0:35) |
| 0:35–0:55 | **Demo** | Summarize a legacy model — **cold, then after co-setup** |
| 0:55–1:05 | **Discuss** | One task you'd hand off |
| 1:05–1:10 | **Break** | — |
| 1:10–1:50 | **Lab** | Your first Cowork session (40 min) |
| 1:50–1:58 | **Debrief** | Debrief + knowledge check |
| 1:58–2:00 | **Close** | Homework + what's next + feedback |

### 🎭 Demo persona — answer the co-setup interview as this person
> Read these answers when you run `/cowork-cosetup` in the demo. They're written to match the sample legacy
> model, so the "after" summary comes back as an engineer's stand-up-ready doc. Stay in character; it keeps
> the demo fast and the before/after coherent.

**Maya Chen — Senior Analytics Engineer, Gen Re** · Global IT — Enterprise Data & AI Services · reports to the Director, Data & Platform Engineering.

| Interview question | Answer to give |
|---|---|
| Name, title, team, who you report to | "Maya Chen, Senior Analytics Engineer, Global IT — Enterprise Data & AI Services. I report to the Director, Data & Platform Engineering." |
| What are you accountable for? (one sentence) | "Modernizing the legacy model estate — turning undocumented Excel/VBA and R models into documentation and specs the Python platform team can build from." |
| The 3–5 tasks that eat your week | "Process documentation and specs from legacy Excel/VBA and R models; code reviews before things ship to the platform; interviewing model owners for the business rules the code doesn't explain; keeping the modernization backlog current; answering the platform team's questions about legacy behavior." |
| Tools / data you live in | "Microsoft 365 — Outlook, Teams, SharePoint — the legacy model estate, the Python platform repo, VS Code, Git, and Excel for tracing legacy logic." |
| Voice & writing style (expect several) | "Bottom line first, then support. Short, declarative sentences; clear, practitioner-grade, plain English. Measured and precise — never dramatic. Precise engineering terms (input, transformation, hardcoded, edge case), no vague judgment like 'messy' without a specific finding. Structured doc with headers, not prose. Structured for the platform team; plainer for a stand-up note." |
| AI do's and don'ts | "Always: cite the specific line or cell for every claim, flag every defect with what could go wrong, put anything unexplained in an open-questions section, frame it as a draft for sign-off. Never: invent behavior the code doesn't show, fix the code — flag it, bury a defect, be promotional. Avoid AI tells: no clichés or filler, no emoji, don't over-hedge, don't overuse em-dashes." |
| (Delivery role block) good vs rushed; approvals | "Good = every claim cites its line, defects flagged with failure conditions, unknowns marked as open questions. Rushed = generic, uncited, glosses over what it doesn't know. Chain: engineer drafts → Director reviews → the platform team builds from it." |

**Voice sample (give if it asks):** "This workbook prices property treaty layers from a pasted loss run. Three risks before we port it: the row count on LossRun!B1 is maintained by hand, the 5% trend constant hasn't been revisited since 2019, and the rate-on-line cell reads the wrong input. Nothing here is guessed."
**One memory fact (give if it asks):** "Modernization stand-up is Thursdays; specs and docs due Tuesday EOD. Every claim cites the line it came from; defects are flagged, not fixed."

---

## Open · 0:00–0:10 (10 min)
**[SAY]** "Quick show of hands — who's opened Cowork, stared at a blank screen, and closed it again? Normal
starting point. By the time we finish, Cowork will know your role, write in your voice, and you'll have
handed it one real piece of your work and watched it produce something you can use. No code. And the
question every one of you should have — *'should I let an AI touch my work, at a reinsurer?'* — I'll answer
directly at the end, because the answer is the reason we can run this at Gen Re at all."

**[DO]** **Maturity poll** — everyone opens the [AI maturity poll](pages/training/index.html#maturity). Ask
for a show of hands per level; **pitch the session to the middle.**

**[DO]** Pre-flight, 30 sec: "In Teams chat, drop a **1** if Cowork's installed, **2** if you also ran the
setup command." Tells you how much of the Lab is *do-now* vs *verify*.

---

## Teach · 0:10–0:35 (25 min)

### What Is Cowork? · 0:10–0:22 — *follow along: Lesson 1*
**[SAY]** "One distinction makes everything click. **Chat is collaborate. Cowork is delegate.** In a chat,
Claude can't open your files, so whatever it suggests, *you* go do. In Cowork, you describe the *result*,
hand it the files, and it does the work and checks in as it goes. You get back a finished document, not a
transcript you still have to act on. Without training, people use Cowork exactly like chat and never see
the difference — that's the gap we close today."

**[SAY] — guardrails (the firm's answer):** "Three, and they *are* the safety answer: it **only touches
folders you hand it**; it **runs code in an isolated VM**; it **always asks before it permanently deletes.**"

**[SAY] — what it's built on:** "Claude Cowork is the **Claude Code engine** inside the desktop app — the
same agent developers use, no terminal. We teach Claude Cowork, exclusively."

**[NOTE]** No Copilot framing on this branch. Governance depth is Workshop 4 — one line, move on.

### Get Set Up · 0:22–0:35 — *follow along: Lesson 2 + Lesson 3 "Mind the cost"*
**[SAY] — data access:** "Cowork works on the **folders you grant it** — one scoped folder per task, nothing
outside it. That's the whole data-access model, and it's why this clears at a reinsurer. If anyone asks about
the **Microsoft 365 connector**: it's **not yet available at Gen Re — it's under IT Security review**; until
it's approved, we work local-folder-first." **[SAY] — fallback:** "If anything won't authorize,
**don't fight it** — run `/cowork-cosetup` anyway; it just asks more questions instead of pre-filling."

**[SAY] — the cost dial (say it now, repeat it):** "Three habits keep this cheap and sharp. **Sonnet is the
dial** — leave it there; Opus only for genuinely hard reasoning (Workshop 2). **One task per session** —
long threads cost more and drift; fresh session for the next task. **Chat for the small stuff** — don't spin
up a delegation for a one-liner — and watch **Settings → Usage.**"

**[SAY] — two layers, keep them straight:** "Cowork reads instructions from two places. **Global
instructions** live in **Settings** and apply to *every* session — chat, Cowork, everything — so that's the
place for broad, always-on preferences. **Folder ('cowork') instructions** are a **`claude.md`** file that
sits *inside a specific folder* and only apply when you're working in that folder — project context for that
one workspace."

**[SAY] — co-setup overview:** "Setup is one command — `/cowork-cosetup`. It **reads first, then asks**:
pulls your role and team from M365 and has you confirm, adapts to your role, and anything you skip it marks
`[FILL IN]`. Here's the key thing: it writes the **folder `claude.md`** (plus your **`about-me/`** files)
**for the local folder — *not* your global Settings.** So your personalization travels with the folder, and
you can keep different context per project. You'll run it in the lab."

---

## Demo · 0:35–0:55 (20 min) — Summarize a legacy model, before → after
*Assets: `assets/demo/sample-legacy-model.md`, the exact prompt, and Maya's ready-made profile (`assets/demo/maya-profile/`) — on the [facilitator guide](pages/workshops/facilitator-guide.html#workshop-1).*

**[SAY]** "Here's the difference setup makes — same file, same prompt, run twice." **[DO]** Grant Cowork the
`model-demo` folder (the sample legacy model). **[NOTE]** Least privilege out loud: one folder, not a parent.

### (a) Cold — before any setup
**[DO]** On your **cold path** (a session with no profile loaded), paste the **exact prompt**:
> *"Read the legacy model in this folder and write a one-page summary I can take to the modernization
> stand-up. Cover: what the model does and who uses it, what each tab holds, every input the macro
> depends on, and the top three risks to flag before we port it. Don't invent anything — if the file doesn't explain something, say so."*

**[SAY]** as it runs: "Watch the right side — that's the **plan.** Read the plan before the result; fixing a
wrong plan costs nothing." **[DO]** Approve a step; open the finished summary. **[SAY]** "Useful — but
**generic.** Neutral tone, generic structure, no idea who I am. Remember it; we'll run the *exact same
sentence* again."

### (b) Build the profile live — run co-setup as the persona
**[DO]** Fresh session → `/cowork-cosetup`. It harvests what it can from any granted folder, then asks
**one question at a time in a popup** — answer **as Maya Chen** (persona card in pre-session prep): her role,
what she's accountable for, her weekly work, her voice and writing style, and her AI do's and don'ts;
`[FILL IN]` anything you'd skip. **[SAY]** "I'm answering as an **analytics engineer in Global IT** — the kind of
person in this room. Notice it adapts its questions to my field and asks one at a time."
**[NOTE]** Short on time? Pre-build Maya's profile before the session and show just a **2–3 question snippet**
here, then switch to the ready profile (ready-made files: `assets/demo/maya-profile/`).

### (c) After — same prompt, now personalized
**[DO]** New session on **Maya's** profile; paste the **identical** prompt against the same file.
**[SAY]** "Same file, same sentence. Now it's **Maya's stand-up doc** — bottom line first, in her voice,
flagging the hand-maintained row count, the trend constant hardcoded since 2019, the rate-on-line cell reading
the wrong input — each with the line it lives on — and it marks what the file doesn't explain as *open
questions* instead of inventing answers. That's `claude.md` and `about-me/` doing the work, and it's
**20 minutes of setup, not 2 months.**"

**[SAY] — framing:** "This is a **draft the responsible engineer signs off on** — Cowork drafts, it doesn't decide.
Kept on **Sonnet** the whole time."

---

## Discuss · 0:55–1:05 (10 min) — One task you'd hand off
**[SAY]** "Go around — name **one repetitive, document-heavy task** from your week you'd hand off. Concrete
wins: *'document the covenant workbook,' 'review my R script before it ships.'*" **[DO]** Capture answers
in Teams — **these seed Workshop 2's use-case shortlist.**

---

## Break · 1:05–1:10 (5 min)

---

## Lab · 1:10–1:50 (40 min) — Your first Cowork session
*Follow along: Lesson 3. Protect this block — it's where the value lands.*

**[THEY] — finish setup:** "Run `/cowork-cosetup` if you haven't, and confirm the files exist — `claude.md`
plus the `about-me/` folder. Open `voice-profile.md` and `writing-rules.md` and make them sound like you;
those two are worth getting right. **Connector won't connect? Run it anyway.**"

**[THEY] — the two-prompt aha:** "New session, two prompts:
1. *'Recap what you know about me.'*
2. *'Given who I am, what are the three highest-leverage things you could help me with this week?'*
Paste your best second answer into Teams. If the mirror's blurry, your profile's thin — fix
`voice-profile.md` and re-run."

**[THEY] — first delegation → a deliverable:** "Now delegate one real task that ends in something you can
check. **Sonnet, ask-before-acting on, one clean folder, fresh session.** Starters: summarize a **legacy model
or script you own**; work through a **config or process doc** for points and gaps; or draft a
**recurring status update** in your voice. No file handy? Use the **sample legacy model** and the demo prompt. Read the
plan, approve each step, check the result against your bar — then **post the deliverable in Teams.**"

**[NOTE]** Circulate — help with access and folder grants. Don't wait for 100%; setup spills to homework.
Make sure **everyone has a deliverable** before Debrief (champions mop up). House rule: **delegate something
good, you post it.**

---

## Debrief · 1:50–1:58 (8 min) — Debrief + knowledge check
**[SAY] — what surprised you?** Take two or three.

**[SAY] — the safety answer (close the loop):** "I promised to answer *'should I let AI touch my work at a
reinsurer?'* It's exactly what we did:
- It only sees the **folders you grant**; code runs in an **isolated VM**; it **asks before it deletes.**
- Connectors are off until approved — the M365 connector is **under IT Security review** at Gen Re.
- The June-2026 audit-coverage gap is **managed** — least privilege, approvals on, the admin dashboard +
  Analytics API. Work needing **zero-retention or centralized audit** routes to Anthropic's audited surfaces
  (the API or Claude Code Enterprise), not the Cowork interface. Governance in depth is Workshop 4."

**[THEY]** "Two minutes — run the **knowledge check** at the bottom of Lesson 3 to lock it in."

---

## Close · 1:58–2:00 (2 min) — Homework + what's next
**[SAY] — homework:** "Before next session: run **one more real delegation** and post it in Teams — the
people who try one thing between sessions are the ones still using this in a month. Finish your `[FILL IN]`s."
**[SAY] — next:** "Workshop 2 — real use cases for your role, working effectively without overspending, and
the failure modes to watch." **[DO]** Drop the **2-minute [feedback](pages/workshops/feedback.html)** link.

**[NOTE — off-mic] Restore your account:** paste your backed-up global instructions back and restore your
real `about-me/`. Don't leave it on the cold demo profile.

---

### Facilitator appendix
- **Hold the lab.** If you run long, **cut the teach, not the lab** — it's the 40 minutes that matter.
- **Connector struggles (keep moving):** *"Run `/cowork-cosetup` anyway — no harvest just means a few more
  questions."*
- **Before/after logistics:** switching from a cold to a personalized account live can be fiddly — a
  **pre-captured screenshot** of the cold result is a fine stand-in; run the *after* live.
- **Top risks:** pre-work/consent gaps (use the fallback + a "watch now, do tonight" path); someone grants a
  real data folder (redirect to a clean one, restate least privilege); cosetup not installed (copy-paste the
  `SKILL.md` from Lesson 2).
- **Lines worth keeping verbatim:** "shared desk — everything you want it to do goes in here," "a new hire's
  manual on day one," "the notebook it checks every morning," "vague instructions, vague outputs."

### Script ↔ on-site sync notes
- **Agenda** matches `module-1-workshop.html` / `syllabus.html` (8 slots, 2 hours) and the
  `facilitator-guide.html#workshop-1` demo + discussion.
- **Demo asset:** `assets/demo/sample-legacy-model.md`; the **exact prompt** is the held-constant before/after
  prompt and matches the code block on the facilitator guide.
- **Entry file** is `claude.md`; the relevance prompt matches Lesson 3 Prompt 2 and the cosetup skill.
- **Cost dial** lands in Teach (Lesson 3 "Mind the cost"); deep version is Lesson 5.
