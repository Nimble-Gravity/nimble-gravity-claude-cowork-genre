# Workshop 3 — Build a Skill · Facilitator Script
### Claude Cowork · 2 hours, hands-on · virtual (Teams screen-share, participants hands-on)

> **Conforms to the on-site agenda** (`pages/workshops/module-3-workshop.html`, `syllabus.html`,
> `facilitator-guide.html#workshop-3`). Same 8-slot shape as W1/W2: **Open · Teach · Demo · Discuss ·
> Break · Lab · Debrief · Close.** **Branch:** `client-genre` — **Claude Cowork only.**

**Outcome:** every participant leaves (1) knowing Anthropic's skill standards well enough to critique a
real `SKILL.md`, and (2) having built, repaired, authored, and chained skills under live pressure in the
**Skill Vault** — the 40-minute escape-room lab.

**Demo asset:** **yesterday's solution-profile demo** — Demo prompt 1 from Lesson 4 §04 (the exact
prompt the room watched run in W2) and the `solution-profile-demo` folder (TreatyLayerPricer), still
staged from yesterday. The demo turns that prompt into a skill live; a finished
**solution-profile skill** (`skills/solution-profile/SKILL.md`) stays open in a side window as the
safety net. The **workflow-decomposition skill** (`skills/workflow-decomposition/SKILL.md`) stays
installed for homework pointers. Skills are on the
[facilitator guide](pages/workshops/facilitator-guide.html#workshop-3) and in the
[resource library](pages/workshops/resources.html).

**Lab asset:** six files distributed before breakout rooms open — on the
[lab page](pages/training/11-build-a-skill-lab.html) and the workshop hub.

**Legend:** **[SAY]** talk track · **[DO]** live demo · **[THEY]** participants act · **[NOTE]** facilitator note · **[POLL]** Teams poll · **[>>]** color commentary — the WHY behind the step

---

## Pre-session prep
1. **Stage yesterday's demo, again.** The W3 demo turns *yesterday's* solution-profile prompt into a
   skill live, on the same TreatyLayerPricer folder the room already watched. Confirm the
   `solution-profile-demo` folder is still intact from W2 (re-unzip if you modified it), open
   **Lesson 4 §04** in a tab so Demo prompt 1 is one Copy-click away, and keep a finished copy of
   `skills/solution-profile/SKILL.md` in a side window as your safety net if the live draft goes
   sideways. Do **not** pre-install a solution-profile skill — the room must watch it get made.
   Install the workflow-decomposition skill for homework pointers.
2. **Pre-build BOTH quiz polls — W1 and W2.** The Open slot runs the Workshop 1 *and* Workshop 2
   knowledge checks live (they were cut for time in W2 — client asked for them back, at the start).
   4 questions each, single answers, built in Teams the day before. The questions live in
   `interactive.js` (`QUIZZES.m1` / `QUIZZES.m2`) — answers were re-checked for clarity/accuracy on
   2026-07-29; read each poll against the site version the night before so poll text matches exactly.
3. **Test your screen share end to end.** Yesterday's share snafu cost minutes — do a full dry run:
   share the slides tab, confirm the room sees it, then switch to the Cowork window and back. Present
   the deck at higher zoom (Ctrl+= once or twice) — W2 feedback said the slide font read small.
4. **Confirm the canonical Cowork folder path.** The filing-system beat (Teach → "Where every file
   lives") names ONE path for everything. It must match what participants saw in W1/W2 — verify the
   path you'll say out loud is the same one on their machines before you script it on a slide.
5. **Pull 2–3 skill seeds from the W2 Discuss export.** These are the top-ranked use cases from the W2
   "which would save you the most time" poll. Name them in the Open to make it concrete — they also
   seed the Discuss brainstorm.
6. **Pre-recruit two heavy users for the Discuss slot.** DM them the day before: *"I'd love you to
   kick off the brainstorm — would you name the first skill idea from your own work in 90 seconds? No
   prep needed."* This removes cold-call risk from the highest-stakes discussion in W3.
7. **Stage the demo (recap of item 1).** Lesson 4 §04 tab open for Demo prompt 1;
   `solution-profile-demo` folder intact; finished `skills/solution-profile/SKILL.md` open in a side
   window as the safety net; workflow-decomposition skill installed. The demo flow is in the Demo
   section below.
8. **Distribute lab files.** Share all six lab files (on the hub and lab page) in Teams chat *before*
   the break — participants need them staged before the vault clock starts:
   `meeting-extractor-SKILL.md`, `vault-standup-notes.docx`, `client-formatter-SKILL.md`,
   `raw-notes.docx`, `interview-notes-jmalik.docx`, `qa-checklist.docx`.
   **Note:** `meeting-extractor-SKILL.md` must be installed as a Cowork skill before the vault opens
   (Room 1 step 1). Tell participants to create a folder named `meeting-extractor`, put the file
   inside it, and add it via Settings → Skills.
9. **Open the [facilitator view](escape-room/admin.html).** Keep it in a side window during the lab —
   it shows live team progress, hints used, and a reset button for stuck teams.

### Run of show — the 2-hour agenda
| Time | Slot | Content |
|---|---|---|
| 0:00–0:15 | **Open** | W1 + W2 knowledge checks live (protected) + skill seeds |
| 0:15–0:35 | **Teach** | What is a skill? + where every file lives (0:15–0:21) · Decompose (0:21–0:27) · Anatomy (0:27–0:33) · Make it a skill preview (0:33–0:35) |
| 0:35–0:52 | **Demo** | Live: turn yesterday's solution-profile prompt into a skill — tell, show, recap, then schedule it |
| 0:52–1:04 | **Discuss** | Skill-idea brainstorm + good/bad litmus + announce vault teams |
| 1:04–1:10 | **Break** | Team setup + file confirm |
| 1:10–1:50 | **Lab** | The Skill Vault — 40-minute escape room |
| 1:50–1:57 | **Debrief** | One share per team + knowledge check |
| 1:57–2:00 | **Close** | Homework + what's next + feedback |

**Why Open grew and Demo changed shape:** W2 feedback, verbatim asks — *"let's do the quizzes at the
beginning to recap sessions 1 & 2 before starting 3"* (they were cut for time in W2); *"make sure they
understand the concept of a skill and then how to create one. Let them watch you do it. Then recap.
Then maybe schedule one"*; and *"more brainstorming of skill ideas before doing the escape room."* The
5 extra Open minutes come from the Teach block (the demo now teaches Make-It-a-Skill by doing it) and
2 from the Demo. The Lab keeps its full 40 minutes — never cut it.

---

## Open · 0:00–0:15 (15 min) — protected: cut Teach before you cut the quizzes

**[SAY] — name the callback:** "Two sessions ago I promised you the knowledge checks and then cut them
for time. Today we start with them — five minutes on Workshop 1, five on Workshop 2. No grades, no
names; this is a recap, not a test."

**[DO] — W1 quiz live (5 min):** Launch the pre-built W1 knowledge-check poll (4 questions). Read each
question and the correct answer aloud as the results land. On the "where does Cowork read your files"
question, land the one-liner: *"On your machine, only in the folder you grant — that's the filing
story we'll nail down completely today."*

**[DO] — W2 quiz live (5 min):** Same rhythm, 4 questions. On the "connect only the folder the task
needs" question, say it again: *"One task, one folder. Hold that thought for ten minutes."* Keep both
quizzes brisk — this is a loop-close, not a lesson review.

**[>>]** *Why open with both quizzes?* Direct client ask after W2: run the session 1 & 2 quizzes at the beginning, before starting session 3 — they were cut for time and the client noticed. Beyond the accountability loop, the quizzes are a warm-up that requires zero speaking, and two of the eight questions (folder grant, file locations) tee up today's defined filing process before you ever present it. Poll answers were re-verified for clarity and accuracy on 2026-07-29 — read them confidently.

**[SAY]** "Now — three things you told us after Workshop 2." **[DO]** Name 2–3 use cases
from the W2 Discuss export. *"You said: 'triage my incoming claims advices,' 'summarize a new renewal
submission,' 'first-pass my quarterly aggregate review.' Today we learn how to turn one of those into
a skill that runs every time, not just when you remember to ask."*

**[>>]** *Why name their use cases out loud?* It closes the feedback loop from W2 — they submitted something and heard it back, which reinforces that the between-session work matters. It also anchors the abstract skill-authoring content to a concrete use case they already care about. Don't invent examples; use actual submissions even if imperfect.

**[SAY] — arc reminder:** "We're in Workshop 3 of 4. W1 you got set up, W2 you ran a real task end to
end. Today you package that workflow into a skill anyone can reuse. W4 pushes it to a team and governs
it. By the end of this session you will have built, broken, fixed, and chained skills in the vault —
in 40 minutes under a clock."

**[DO] — home base:** "Open the **[Workshop 3 hub](pages/workshops/module-3-workshop.html)** — that's
your page today. All four lessons, the lab, and the download links hang off it."

---

## Teach · 0:15–0:35 (20 min)

### What Is a Skill? + Where every file lives · 0:15–0:21 (6 min orientation)

**[SAY]** "Before we build one, let's be clear on what we're building. In Workshops 1 and 2 you
typed a prompt — you described a task, Cowork ran it, you got a result. That's a **delegation**. A
skill is the step beyond that: instead of you writing the task description every time, **the skill
holds it.** You install it once, and from then on Cowork reads the skill's description at startup and
knows: *'When someone asks to draft an underwriting summary, that's this skill. When someone asks to triage
claims advices, that's that skill.'* You just work. Cowork routes to the right instruction set."

**[SAY]** "Technically: a skill is a folder with one file — `SKILL.md`. YAML frontmatter at the top
gives it a name and a description; a Markdown body below holds the instructions. That's it. The same
file runs in Claude Cowork and in Claude Code — one skill, both surfaces — on the open **Agent
Skills** standard."

**[SAY] — the practical jump:** "Workshop 2 you had a prompt you refined over a few sessions until
it reliably worked. A skill is that prompt, packaged so anyone on your team gets the same quality
result without having to rediscover the right words. That's why Workshop 3 exists: to take the
thing you learned to do and make it something the whole team can do."

**[SAY] — where every file lives (the filing system — say it exactly this way, every time):** "Before
we build anything: where do files go? One answer, no options. Everything Cowork lives in **one home
folder** — the folder you set up in Workshop 1. Inside it, exactly three kinds of things:
**your profile** — `claude.md` and the `about-me` folder — one copy, at the top, edit it in place,
never copy it anywhere else. **One folder per task** — inputs go *into the folder before you start*,
not into the chat; you grant Cowork that one folder; the output lands there too. **One folder per
skill** — a folder named for the skill with `SKILL.md` inside; to change a skill you edit that one
file and re-add it — you never make a second copy. If you ever have two copies of anything, delete
one now. That's the whole system: one home, one profile, one folder per task, one folder per skill."

**[NOTE]** This is the tightened answer to the W2 confusion about where files go and how to update
them without ending up with multiple copies. Deliver it as **the** process, not a recommendation —
no alternatives, no "you could also." If someone asks about a different arrangement, the answer is:
*"That works too — bring it to office hours; in this program we all do it this one way."* Confirm the
home-folder path matches what W1 actually set up (prep item 4) and show the path on screen as you say it.

**[>>]** *Why a no-options filing system?* W2 feedback verbatim: "the folder structure is a hard one... we need to set up a defined process to be able to speak to, not give them options" and "tighten up our messaging about... where files are going and how to control and update them to avoid multiple copies." Options are a tax on novices — every fork ("you could put it here, or here") becomes a support question later. One prescribed layout means every later instruction ("stage your lab files," "install the skill") can name an exact place, and the Room 1 install steps land without confusion.

**[>>]** *Why carve out a definition block before the canvas?* Because without it, participants hear "decompose a workflow" and "write a SKILL.md" as two separate technical tasks with no clear relationship to anything they did in W1/W2. The definition creates the through-line: W2 prompt → W3 skill → W4 plugin. That arc is what makes the Skill Vault feel like a meaningful step rather than a new subject. It also prevents the most common confusion in W3: participants who think a skill is something you run manually like a slash command, rather than something that fires automatically when the situation matches.

---

### Decompose Your Workflow · 0:21–0:27 — *follow along: Lesson 8*

**[SAY]** "A skill is only as good as the thinking before you write it. If you sit down and start
writing a `SKILL.md`, you're going to write documentation — and documentation nobody tested is the
single most common way a skill fails. So before the file, a canvas: **steps, data sources, and a
clear picture of good versus bad output.** That canvas is what the skill gets built from."

**[SAY] — the three questions on the canvas:**
- *"What are you trying to produce? Name the deliverable in one line."*
- *"What makes it slow or error-prone today? Name the pain."*
- *"For each step — where does the input come from? A folder, a connector, a specific file format?"*

**[>>]** *Why spend 8 minutes on a canvas before writing anything?* Because almost everyone's instinct is to start with the instructions — the `SKILL.md` body — and iterate from there. But Anthropic's own guidance on agentic work warns against writing skills without defining what good output looks like first. The canvas session front-loads that definition work. It also transforms skill-authoring from a solitary writing task into something a team can reason about together, which matters for W4's shared-plugin story.

**[SAY] — slicing (the most important technical point in L8):** "Anthropic's guidance on long-running
agents is clear: **don't try to do a big task in one shot.** You either run out of context, or the
agent decides the job is done when it isn't. The fix is slices — small enough to leave a clear
artifact at each step. Think of it like building a proposal one slide at a time: you get something
reviewable after each slice, not at the very end."

**[SAY] — evals before docs:** "The last thing on the canvas: write what good looks like and what bad
looks like *before* you write the skill. That's Anthropic's evaluation-driven method in plain terms.
Three realistic test scenarios, a baseline run without the skill, then you write only the instructions
needed to pass."

---

### Anatomy of a Skill · 0:27–0:33 — *follow along: Lesson 9*

**[SAY] — the two parts of a `SKILL.md`:** "A skill is a folder with one file: `SKILL.md`. YAML
frontmatter up top — name and description — and a Markdown body below. That's the open Agent Skills
standard. Anthropic has clear opinions about how to write both."

**[SAY] — the description is the doorway:** "At startup, Claude reads exactly two things from each
skill: the name and the description. That's how it decides which skill to use. So a vague description
— or a first-person one — means the skill never fires. Write it third-person, keyword-dense, and *almost
too eager*: say what the skill does, when to use it, and list the actual words that should trigger it."

> **Example trigger line (say this out loud):**
> *"Use when someone asks to 'write a memo,' 'turn these notes into a memo,' 'draft a summary memo,' or
> 'put this in memo form' — especially for recurring internal or client-facing memos in regulated,
> document-heavy work."*

**[>>]** *Why dwell on the description?* It's the single highest-leverage line in a `SKILL.md`. Every room in the Skill Vault is directly tied to this: Room 1 requires triggering a skill by matching its description; Room 2 requires rewriting a description that's too vague to fire. If participants understand nothing else from this lesson, they should understand that a skill's description is not documentation — it's a selector. The body is secondary.

**[SAY] — body rules, verbatim from Anthropic:** Quote these directly; they're on the lesson page
(`09-anatomy-of-a-skill.html`) and on platform.claude.com (current as of June 2026):
- *"Concise is key. The context window is a public good."* Keep it under 500 lines. Use progressive
  disclosure — point to detail files, don't inline them.
- Instead of MUST, ALWAYS, NEVER — explain the rule and say *why*, so Claude can generalize.
- Include real input/output examples. A few is enough.
- Detail files: keep references one level deep. Nested references three deep never get fully read.

**[NOTE]** Always date-stamp the Anthropic quotes: *"This is from Anthropic's skill-authoring
best-practices doc, current as of June 2026. Re-verify it against the Sources in `cowork-context.md`
before each cohort — it changes."*

**[SAY] — evals before docs (say it again):** "Anthropic's exact words: *'Create evaluations before
writing extensive documentation.'* You build a skill by testing it, not by writing prose and hoping.
Write one Claude, test with a fresh one cold. Run on Haiku, Sonnet, and Opus — a skill that only
works on the largest model isn't finished."

**[>>]** *Why repeat "evals before docs" twice in two lessons?* Because every room in the lab is secretly testing whether they understood it. A participant who internalizes this phrase builds Room 3's Candidate Evaluator with the right shape on the first try. One who doesn't writes a body full of prose and then can't figure out why the door won't open. Repetition here has a mechanical payoff 40 minutes later.

---

### Make It a Skill (preview) · 0:33–0:35 — *follow along: Lesson 10*

**[SAY]** "You don't have to start from a blank `SKILL.md`. The fastest path: paste a working prompt
and say **'Turn this into a skill with a description that triggers when I ask for [X].'** Then the
loop: test it against a baseline without the skill, and add only what the evals demand. Rather than
talk you through it — I'm going to do it, right now, start to finish. Watch."

**[NOTE]** Keep this to two minutes — it's a preview, not a lesson. The demo *is* the lesson now
(teach-show-recap). If asked about the skill-creator's `run_loop` auto-tuner: it needs a raw
`ANTHROPIC_API_KEY`, so SSO-only sign-ins can't run it — hand-tuning the description gets the same
result. Park deeper questions to office hours.

---

## Demo · 0:35–0:52 (17 min) — Create the solution-profile skill live: tell, show, recap, schedule

*Asset: **Demo prompt 1 from Lesson 4 §04** (the exact prompt from yesterday's demo) + the
`solution-profile-demo` TreatyLayerPricer folder, still staged from W2 +
`skills/solution-profile/SKILL.md` open in a side window as the safety net. Follow along →
[Lesson 10](pages/training/10-make-it-a-skill.html) for participants watching.*

**[>>]** *Why the demo changed shape — and why it reuses yesterday's material.* W2 feedback, verbatim: "make sure they understand the concept of a skill and then how to create one. **Let them watch you do it. Then recap. Then maybe schedule one.**" The old demo decomposed a workflow and read a finished skill — participants never saw a skill get *made*. This demo makes one, end to end, with tell-show-recap — and it makes it from the *exact prompt the room watched run yesterday*, on the same TreatyLayerPricer folder. One system carries the whole arc: W1 summarized it, W2 documented it with a long prompt, W3 packages that prompt so nobody ever types it again. One example, fully explained — less is more.

**[DO] — tell (1 min):** "Yesterday you watched me run one long prompt on the TreatyLayerPricer
folder and get a solution profile and an architecture diagram back. Here's what you're about to
watch, in four steps: I take that exact prompt. I ask Claude to turn it into a skill. I file it and
install it — the one way we always do it. Then I open a fresh session and watch it fire from one
plain sentence. Watch the folder and the description — those are the two things that matter."

**[DO] — show: create it (9 min):**
1. New Cowork session. Pop to the Lesson 4 tab, hit **Copy on Demo prompt 1**, paste it on screen —
   don't run it. **[SAY]** "This is yesterday's prompt, word for word. It works — but it's a page
   long, it lives in a lesson page, and next quarter whoever needs it will retype a worse version.
   Now:"
2. Above it, type: *"Turn the prompt below into a skill with a description that triggers when I ask
   to document a legacy system, write a solution profile, or prepare handover documentation."* Let it
   draft the `SKILL.md`. **Stop talking while it runs** — let the room read the draft as it lands.
3. **[SAY]** as you review the draft: "Two parts — the description up top, that's the doorway; the
   instructions below, under 500 lines. Everything yesterday's prompt spelled out — the eight
   sections, cite every claim, don't invent answers — is now the skill's instructions. The
   description is new: third person, keyword-rich, says exactly when to use it."
4. File it **the one way**: a folder named `solution-profile` inside the skills folder of your Cowork
   home, `SKILL.md` inside it. **[SAY]** "One folder per skill. `SKILL.md` inside. That's the whole
   filing act — and when I improve this skill next month, I edit *this file, in this folder*. No
   second copies." Add it via Settings → Skills.
5. Fresh session, grant **only** the `solution-profile-demo` folder — least privilege, out loud.
   Type one plain sentence — *"Document this legacy pricing tool for the modernization team"* — and
   let the skill fire. **[SAY]** "Yesterday that took a page of prompt. Today it took nine words —
   because I didn't name the skill, I described my task, and the description matched it. That's a
   skill triggering on intent." (No need to let the full profile finish — the skill firing and the
   plan rendering is the proof; move on.)

**[DO] — recap (2 min):** "Say back what you just watched — four steps: yesterday's working prompt →
'turn this into a skill' → one folder, one file, installed → fresh session and nine words fire it.
That's the whole method. It's also exactly what you'll do in the vault, under a clock." Pause. Ask
for questions in chat, take one or two.

**[DO] — show again: schedule it (3 min):** "One more thing — a skill you trigger by hand is good; a
skill that runs on a schedule is better. TreatyLayerPricer runs quarterly — so:" Use `/schedule` to
set a quarterly task — narrate: *"First Monday of each quarter, refresh the solution profile in this
folder from the latest run notes."* **[SAY]** "That's the full arc: yesterday's prompt became a skill
anyone can trigger, and now it's a delegation that runs without anyone asking. That's the difference
between using Cowork and *operating* it."

**[DO] — hold it against the standards (2 min):** Scroll the draft once more: "Description — would it
trigger? Yes. Body — under 500 lines, real examples, guardrails with the *why*, no ALL-CAPS. Evals —
we tested it against a fresh session before trusting it. Now: **'Everything you just watched is a key
to a door.'** After the break you'll use these exact disciplines to escape the vault."

**[>>]** *"A key to a door" — say this line.* It's the transition that primes the lab. The vault's narrative continues the demo's story: after A. Keller left (yesterday's handover call), an outside consultant ran the TreatyLayerPricer modernization delivery — and has now rolled off too, locking the modernization team's playbook behind skill-locked doors. The skills they just watched you build are literally how you open the rooms.

**[>>]** *If the live draft goes sideways.* You have the finished `solution-profile/SKILL.md` in a side window — switch to it, say *"here's one I made earlier,"* and continue from the filing step. Losing two minutes to a bad draft is fine; losing ten to live-debugging is not. And if the skill doesn't fire in step 5, narrate it as a preview of Room 2: *"The description wasn't specific enough to match that intent — watch me widen the trigger."* Fix it live in 30 seconds. Don't apologize; that failure mode is the single most instructive moment available.

---

## Discuss · 0:52–1:04 (12 min) — Skill-idea brainstorm + good/bad litmus + vault teams

*Follow along: Lesson 9 good-vs-bad section (`#goodbad`). Pre-recruited heavy users go first.*

**[DO] — brainstorm, chat-first (7 min):** "Before the vault: what would *you* make into a skill?
Everyone — type one repetitive task from your own week into chat. The rule from the demo: it's a
skill candidate if you'd run it more than once and you can say what good output looks like. Nobody
talks until there are ten ideas in chat." **[DO]** Call your pre-recruited heavy users first to break
the seal: *"[Name] — what's the first skill you'd build, in one line?"* As ideas land, read the best
aloud, group them ("that's three of you with a triage skill — that's one skill, shared"), and tie
back to the W2 seeds you named in the Open. **[SAY]** "Screenshot this chat — this list is your
homework menu, and the best of these become the team plugins in Workshop 4."

**[>>]** *Why brainstorm before the vault, and why chat-first?* Two pieces of W2 feedback at once: "maybe do some more brainstorming of skill ideas before doing the escape room exercise," and "wish we had more participation with the polls." Typing into chat is the lowest-stakes participation there is — no unmute, no wrong answers, and ten ideas in chat beats two brave volunteers. Doing it *before* the vault means participants walk into the escape room already knowing what they'd build for real — the lab stops being a game about our scenario and becomes a rehearsal for theirs. The exported chat is also your W4 plugin-demand data; save it.

**[SAY] — the good/bad litmus (2 min):** "One filter before the vault. Here's a real skill
description: *'I am a skill that helps you with your work. Use me whenever you need assistance.'*
Would Claude ever pick that when you ask for a memo? Never — first person, no trigger words, matches
nothing. In practice, the failure is almost always the description. Not the body — the description.
A bad description and nothing else will ever fire. That's Room 2 of the vault in one sentence."

**[>>]** *Why keep the bad example, compressed?* The failure mode is more memorable than the success mode, especially for a reinsurance audience trained on audit findings and exception reports. But it's now a 2-minute litmus, not the centerpiece — the brainstorm earns the slot's time because it feeds the lab, the homework, and W4. Less is more; the full good-vs-bad catalog lives in Lesson 9 (`#goodbad`) for after the session.

**[DO] — vault team announcements (3 min):** "Here's how the vault works: you'll play in teams of
2–4. One person drives Cowork and shares their screen; everyone else advises. Two hints per room: the
first is free, the second adds 2 minutes. Wrong codes cost nothing but time. You have 40 minutes."
**[DO]** Announce breakout room assignments and which participant drives per team. Give teams 30
seconds to find their room before break.

**[>>]** *Why announce team assignments here, not during the break?* The break is only 6 minutes — assigning teams there eats the whole buffer. Announcing assignments at the end of Discuss gives teams the break to do logistics (confirm files downloaded, find their breakout room, decide who drives) so they're clock-ready when the lab opens.

---

## Break · 1:04–1:10 (6 min)

**[DO]** "During the break, file everything the one way we always do: make one folder for today's lab
inside your Cowork home — that's the folder your driver grants. Put all six lab files in it. The
`meeting-extractor-SKILL.md` is the exception — it's a skill, so it gets the skill treatment: a folder
named `meeting-extractor` in your skills folder, the file inside renamed `SKILL.md`, added via
Settings → Skills. Open the [Skill Vault](escape-room/) in a new tab — not in the lab page. Find your
breakout room. Decide who drives Cowork and shares their screen." **[NOTE]** Keep the
[facilitator view](escape-room/admin.html) open — it shows team status live. The staging instructions
deliberately reuse the filing-system language from Teach — same words, third repetition. By the time
the clock starts, "one folder per task, one folder per skill" should sound like a habit, not a rule.

**[>>]** *The break is a staging break, not a rest break.* Participants who arrive at the lab without their files staged will burn 5 minutes of the 40-minute clock on logistics. The break announcement above is explicit about this. You'll need to confirm in Teams chat that files are ready before you open the vault clock, and it's worth waiting an extra 30–60 seconds for stragglers rather than starting with 2–3 teams file-less.

---

## Lab · 1:10–1:50 (40 min) — The Skill Vault

*Follow along: Lesson 11. Open the vault at [escape-room/](escape-room/) — participants in breakout
rooms. Keep the [facilitator view](escape-room/admin.html) open throughout.*

**[SAY] — the story so far:** "Quick story beat before the clock: yesterday you met TreatyLayerPricer
— Keller built it, Keller left, and you watched Cowork document what was left behind. After Keller,
an outside consultant ran the modernization project's delivery workflow — the standups, the client
status updates, the hiring. That consultant just rolled off, and on the way out they locked the
team's playbook in a vault. Their custom Cowork skills are the only keys: one still works, one they
sabotaged, one you'll have to build yourself, and the last door needs two turned at once. Same
discipline you just watched in the demo — under a clock."

**[DO]** "Vault is open. Clock starts when your team enters a team name. One driver per team in
Cowork — the rest advise. Vault in one window, Cowork in the other. Go."

**[>>]** *Why an escape-room format for skill-authoring content?* Three reasons. First, the competitive clock removes the natural tendency to overthink or over-polish — participants who would spend 20 minutes wordsmithing a description in a homework assignment will move at the right pace when there's a leaderboard. Second, the team mechanic means the room's faster thinkers naturally support the slower ones, reducing the facilitator's need to rescue individuals. Third — and most important — every unlock code is gated on the same standards Anthropic holds skills to. The game is a wrapper for discipline; the rules of the game *are* the rules of skill authoring.

### The four rooms — what to watch for

**Room 1 — The Inherited Skill (invoke):**
**[NOTE]** Teams must read the Meeting Extractor skill's description, then construct a prompt that
matches its described intent. Common failure: typing a magic word from the description instead of
describing the task in their own language. Watch for teams who copy-paste keywords from the
description into their prompt — redirect them: *"Read what the skill says it does. Now describe that
task to Cowork in your own words."*

**[>>]** *What Room 1 is teaching.* Skills trigger on intent, not keywords. The Meeting Extractor's description explains the skill's purpose; the prompt should describe a meeting-summary task, not echo the skill's own vocabulary. Teams who understand this move through Room 1 in under 8 minutes. Teams who don't will loop through prompt rewrites until they hit it by accident — and that loop is the lesson.

**Room 2 — The Broken Trigger (repair):**
**[NOTE]** The Client Formatter skill description is deliberately broken: *"A skill."* Teams must
rewrite it to trigger reliably before the skill will produce useful output and reveal the unlock code.
Most teams will overcorrect to 200-word descriptions — remind them: third-person, keyword-rich, specific
about when to use it. Under 1024 characters. Test it by asking: *"Would a fresh Claude choose this skill
from a list of 20?"*

**[>>]** *Room 2 is the highest-transfer room in the vault.* After this exercise, participants will never again write a vague skill description — the cost of vagueness is visceral rather than abstract. The 2-minute hint penalty is also instructive: it mirrors the real cost of iterating on a bad description in production (re-runs, re-tests, re-deploys). If a team is stuck at Room 2 past 20 minutes into the lab, give the first hint free and narrate it: *"The description needs to say when to use it and what should trigger it — keywords the user would actually say."*

**Room 3 — Forge Your Own Key (author from scratch):**
**[NOTE]** Teams author a Candidate Evaluator skill from scratch — no template. Required: four
prescribed sections (Contact Info, Fit Summary, Key Strengths, Concerns), a verdict constrained to
exactly three words. The door only opens if those constraints are met in the output. Common failure:
participants write a body that describes the *structure* of the skill rather than *instructing* Claude
on what to produce. Watch for descriptions that say "this skill evaluates candidates" without
specifying the four sections. Redirect: *"The skill needs to enforce the four sections and the
three-word verdict as constraints — not just mention them."*

**[>>]** *Room 3 proves prescriptive beats vague.* Anthropic's guidance is that instructions should be specific as the task gets more fragile. A candidate evaluation is inherently fragile — format drift or a five-word verdict breaks the process. This room teaches participants to write instructions that *constrain* rather than *suggest*, which is the hardest behavior shift in skill authoring.

**Room 4 — The Playbook Door (chain + QA):**
**[NOTE]** Teams use one prompt to invoke both the repaired Client Formatter (Room 2) and the
Candidate Evaluator (Room 3), then run the QA checklist against the output. Both skills must fire from
a single multi-intent prompt for the door to open. Codes are case-insensitive. The QA checklist prompt
(in the lab step and in `qa-checklist.docx`) now asks for a per-item breakdown — teams see exactly which
items pass or fail, not just a total count.

**Room 4 has two distinct failure modes — know which one you're looking at:**

**Failure mode A — skills don't chain (prompting issue).** Only one skill fires. The output has either
the status update template OR the candidate evaluation, not both. Hint 1 addresses this: "State both
outcomes in one request — evaluate the candidate, then format as a client status update."

**Failure mode B — skills chain but Room 3's output is wrong (skill-writing issue).** Both skills
fire, but the Candidate Evaluator doesn't enforce the right format. QA items 6 or 7 fail:
- Item 6 fails → skill's section names don't match ("Key Strengths" instead of "Strengths," etc.)
- Item 7 fails → Recommendation isn't constrained to Advance/Hold/Decline (output says something like
  "I recommend we move forward with Jasmine")

Teams stuck here often try to rewrite the Room 4 prompt, which won't fix it. **Direct them back to
Room 3:** "Your skill needs to name the four sections explicitly and add a rule that the Recommendation
must be exactly one of: Advance, Hold, or Decline. Fix the skill, reinstall it, and rerun Room 4."
Hint 2 in the vault tells them the same thing once they use it.

**[>>]** *Why two failure modes matter for facilitation.* The vault's per-item QA breakdown makes
failure mode B self-diagnosable in most cases — teams that see "Item 7: FAIL — recommendation not one
of the three allowed words" know what to fix without a hint. But some teams will still try to fix
the Room 4 prompt instead of the Room 3 skill, because "fix the most recent thing" is the natural
instinct. The facilitator's job in that moment is to redirect: the problem is upstream, in the skill
that was written in the previous room. This is actually the highest-value learning moment of the
entire vault — it proves that bad skills create downstream failures, not just bad prompts.

**[NOTE — facilitator view]** Monitor progress through [admin.html](escape-room/admin.html). If a
team hasn't entered Room 2 by the 15-minute mark, drop a team-specific hint in their breakout chat.
If a team is stuck in Room 3 at the 30-minute mark with no code entered, push them toward getting the
four sections right before worrying about the three-word verdict. **At 1:47 — 3 minutes left — call
time** in the main room and ask each team to note where they stopped.

---

## Debrief · 1:50–1:57 (7 min) — One share per team + knowledge check

**[SAY]** "One share per team — what did a room teach you that the lessons didn't? Thirty seconds each."
**[DO]** Take one share per team in voice or Teams. Capture the common themes.

**[SAY] — the meta-lesson:** "Here's what the vault was really testing: every door was gated on the
same discipline Anthropic holds skills to. Room 1: skills trigger on intent, not keywords. Room 2:
the description is the doorway. Room 3: prescriptive instructions keep output from drifting. Room 4:
skills compose when descriptions are sharp enough to be distinct. Those four things are how you ship
a skill that works reliably — not just in the lab."

**[>>]** *Why narrate the meta-lesson explicitly?* The escape-room mechanic is highly engaging but it can leave participants with a vivid memory of the puzzle and a fuzzy memory of the principle. The debrief is the consolidation step — naming the discipline behind each door anchors the experiential learning to transferable knowledge. Say each one clearly and pause after each.

**[THEY]** "Two minutes — run the **Workshop 3 knowledge check** at the bottom of Lesson 11. Not
deferred — do it now while it's fresh."

---

## Close · 1:57–2:00 (3 min) — Homework + what's next

**[SAY] — homework:** "The vault used our scenario. Homework uses yours. Take the workflow you brought
today — or the one you named in Workshop 2 — and run the skill-creator loop on it: decompose it, draft
the `SKILL.md`, test against your evals, tune the description until it triggers reliably, then package
a `.skill`. Bring it to office hours. The workflow-decomposition skill downloads from the lab page —
use it."

**[SAY] — IT track note:** "If you submitted a technical use case — SQL analysis, Tableau prep, ADO
tickets — Workshop 4 has your path. Invite your IT or compliance partners; that session is partly for
them."

**[SAY] — keep your skills tool-agnostic:** "Build in the Claude Code plugin structure — it's the
superset. Keep the `SKILL.md` free of tool-specific assumptions and the same file runs in Claude
Cowork and Claude Code. One skill, both surfaces."

**[SAY] — next:** "Workshop 4 — **Plugins & Rollout**: combine skills into plugins, deploy to a team,
and set up governance and adoption tracking. The capstone deliverable is a one-page rollout plan you
can hand to a sponsor." **[DO]** Drop the **2-minute [feedback](pages/workshops/feedback.html)** link
and the **[cheat sheet](pages/workshops/cheat-sheet.html)** link.

**[>>]** *The "tool-agnostic" line is important context for the cohort's IT sponsors.* Participants who hear Workshop 4 is coming and involves IT/compliance partners will start thinking about whether to bring someone. Make the invitation explicit and direct — "invite your IT or compliance partner" — not just a footnote on the slide.

---

### Facilitator appendix

**Hold the lab.** If you run long anywhere, cut Teach — shorten the anatomy walkthrough — not the
vault. The 40 minutes are where the value lands.

**The quizzes are protected too.** They were cut in W2 and the client noticed. If timing slips, the
opening quizzes and the lab are the two blocks you do not touch; Teach is the flex.

**One process, no options.** For anything about file locations — profiles, task folders, skill
folders — there is exactly one answer, and it's the filing-system block in Teach. Never present
alternatives live ("you could also put it..."). Deviations go to office hours. This is direct W2
client feedback: a defined process to speak to, not options.

**Chat-first participation.** Poll and discussion participation was thin in W2. The fix used in the
Discuss brainstorm generalizes: ask for typed one-liners in chat before asking anyone to speak, and
have your pre-recruited users break the seal. Never open with "anyone want to share?"

**Silence is not dead air.** When Cowork is drafting the skill in the demo, stop talking and let the
room read. Same rule as W2 — a pause reads as confidence.

**Slides, zoomed.** Deliver from the slide deck, not by scrolling the microsite — W2 confirmed it's
easier to follow. Present at higher browser zoom; the deck's body text was bumped after W2 feedback,
but zoom in anyway for the Cowork window, where you can't control the font.

**Skill Vault mechanics (recap):**
- Codes are **case-insensitive**; if a team is stuck on a code that looks right, confirm casing isn't the issue.
- Hint 1 is free; Hint 2 costs +2 min on the final time. Use the admin view to track.
- **Reset** is available in the admin view for teams who need a fresh start on a room.
- The format line in each room's last lab step is the hint to give first — it tells teams what the unlock code looks like without revealing the answer.

**Top risks:**
- **Lab files not staged before the vault opens.** Insist on confirming files in Teams chat during the break — don't assume.
- **A team grants a real data folder.** Redirect to the lab file folder; restate least privilege.
- **Someone's SSO blocks the skill-creator optimizer.** That's expected. Point them to the hand-tuning path in Lesson 10. The optimizer is a convenience, not a requirement.
- **A team can't get their skill to trigger.** Almost always the description. Give the free hint: *"Read the description aloud. Would a fresh Claude choose this skill if you asked it to [task]?"*
- **Room 3 is the hardest.** Teams who haven't internalized "prescriptive beats vague" will write a body that describes the skill's intent rather than its required output shape. Give the format constraint hint: *"The skill needs to enforce four specific sections and a verdict in exactly three words as hard constraints, not suggestions."*

**Seeds Workshop 4:**
- Capture the vault leaderboard results — the teams that escaped are your W4 plugin demos.
- Note the use cases from the Debrief shares — the skills participants built in Room 3 and their homework are the W4 shared-plugin candidates.
- If multiple people built a Candidate Evaluator variant in homework, that's your first team-plugin demo for W4.

### Script ↔ on-site sync notes
- **Agenda** matches `module-3-workshop.html` / `syllabus.html` (8 slots, 2 hours) and the
  `facilitator-guide.html#workshop-3` notes. Retimed 2026-07-29 per W2 feedback: Open 15 (both
  quizzes) · Teach 20 · Demo 17 (live creation + schedule) · Discuss 12 (brainstorm-first); Break,
  Lab, Debrief, Close unchanged.
- **Demo assets:** Demo prompt 1 from Lesson 4 §04 + the `solution-profile-demo` TreatyLayerPricer
  folder (both from yesterday's W2 demo — the skill is created live from them);
  `skills/solution-profile/SKILL.md` open in a side window as the safety net;
  `skills/workflow-decomposition/SKILL.md` installed for homework pointers. The vault narrative
  continues the same story (the modernization consultant who rolled off) — see
  `escape-room/config/rooms.source.json`; lab files, steps, and codes are unchanged.
- **Lab assets:** six files from `escape-room/lab-files/` — confirmed downloaded before break.
- **Facilitator view:** `escape-room/admin.html` — open throughout the lab slot.
- **Skill authoring standards** quoted in Teach are from Anthropic's skill-authoring best-practices
  doc on platform.claude.com, dated June 2026 — re-verify before each cohort (the `cowork-context.md`
  Sources block has the reference).
- **Deepens W2:** the skill-seed use cases (Open) come from the W2 Discuss poll export; the
  acceptance-test language from W2 Lab is the same "what does done look like?" prompt used in the
  canvas in L8. Continuity is intentional.
