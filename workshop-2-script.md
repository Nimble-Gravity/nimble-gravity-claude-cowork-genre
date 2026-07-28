# Workshop 2 — Use Cowork · Facilitator Script
### Claude Cowork · 2 hours, hands-on · virtual (Teams screen-share, participants hands-on)

> **Conforms to the on-site agenda** (`pages/workshops/module-2-workshop.html`, `syllabus.html`,
> `facilitator-guide.html#workshop-2`). Same 8-slot shape as W1: **Open · Teach · Demo · Discuss · Break ·
> Lab · Debrief · Close.** **Branch:** `client-genre` — **Claude Cowork only.**

**Outcome:** every participant (1) **runs a real reinsurance task end to end to a deliverable**, and (2) **names
the recurring workflow they'll turn into a skill in Workshop 3** — while learning to work **effectively and
safely** (Sonnet, permission modes, prompt injection, least-privilege folders).

**Demo asset:** the **solution-profile demo folder** (`assets/demo/solution-profile-folder/` + zip) — six
knowledge-worker files describing one fictional legacy system: Word macro export, Excel four-tab data
snapshot, the analysts' run notes, a factor CSV, the **handover-call transcript**, and the modernization
kickoff meeting notes. Today it produces a **solution profile document plus an architecture diagram**. The
zip and both demo prompts live on **Lesson 4 §04**; the folder is also in the
[resource library](pages/workshops/resources.html). *(The `sample-legacy-model` asset is still the **lab**
fallback file for both tracks — it's no longer the demo asset.)*

**Delivery mode:** present from the **Workshop 2 slide deck** (`pages/training/module-2-slides.html`, 26
slides — full untruncated text, so the deck is the talk track) and **pop between the deck and Claude
Desktop** for anything live. The demo cue card is **slide 6** (`#/5` in the URL) — it carries the
Tell · Show · Recap beats and stays your teleprompter while Claude Desktop is on screen.

**Legend:** **[SAY]** talk track · **[DO]** live demo · **[THEY]** participants act · **[NOTE]** facilitator note · **[POLL]** Teams poll (pre-build — see prep)

**Follow-along:** the microsite tracks this script slot-by-slot. Participant **home base is the
[Workshop 2 hub](pages/workshops/module-2-workshop.html)** — the four lessons, the lab (with both track
prompts in tabs), and the downloads all hang off it. Each slot below names the page to be on.

---

## Pre-session prep
1. **Set up the three windows.** (a) The **slide deck** (`module-2-slides.html`), fullscreen — this is what
   the room sees between demos. (b) **Lesson 4** open in a second browser tab — the §04 demo block has the
   **Copy buttons for Demo prompt 1 and 2**; that's where you copy from, one click, no typing on stage.
   (c) **Claude Desktop**, signed in, on your own personalized profile. Practice the alt-tab loop once:
   deck → Lesson 4 tab → Claude Desktop → back to the deck, which reopens on the slide you left.
2. **Stage the demo folder.** Download `solution-profile-folder.zip` (Lesson 4 §04 or the resource library)
   and unzip it somewhere sensible (e.g. `Documents\solution-profile-demo`). Six files, one system — that's
   the point: a real handover is a folder, not a file. Don't add anything else to the folder.
3. **Dry-run Demo prompt 1 once, today, on your machine.** You need to know (a) how long the run takes so
   you can pace the Show beat, and (b) whether it catches the **stale row count** (`LossRun!B1` says 17;
   the data runs to row 19 — planted). If it catches it live, that's your best Recap moment; if it doesn't,
   you point at it yourself as "what the reviewer still checks."
4. **Keep your real Workshop 1 setup folder open too — you'll recap it live.** Don't rebuild a fresh one for
   the demo; open the actual `claude.md` + `about-me/` you set up in Workshop 1 so the recap is real, not staged.
   This is the Open segment's main asset. (Running on your own profile also means the solution profile comes
   back in a practitioner's voice — no before/after today; everyone's already set up from W1.)
5. **Confirm folder access + the least-privilege story.** You'll grant only the unzipped
   `solution-profile-demo` folder on screen — not Documents, not a parent.
6. **Have a prompt-injection line ready** to narrate (see the Demo).
7. **Optional — cue up quiet background audio for genuine dead air** (staging, downloads): share screen with
   sound at low volume if things stall. Do not use it during the Open recap's pauses or lab work time — that
   silence is intentional, not dead air, and playing over it undercuts the point.
8. **If a second person is on the call, ask them to read the room** — chat, reactions, faces on their own
   tile — and privately flag you (Teams chat, facilitator-only) if the pace needs to change. Facilitating
   solo? Build in an explicit check instead: "thumbs-up in chat when that makes sense" before moving on from
   the Open recap.
9. **Pre-build the Teams polls** so each launches in one click (they're marked **[POLL]** at each slot below):
   - Open — "Since Workshop 1, how much have you used Cowork?" *(single)*
   - Open — "Which best describes your day-to-day work?" *(single)*
   - Discuss — "Which use cases would save you the most time? Pick up to 2." *(multi-select)*
   - Debrief — "How ready do you feel to run a real task on your own?" *(single)*
   - Close — "How useful was today? 1–5." *(single)*
   Export the **Discuss** results after — that ranking is your Workshop 3 skill backlog and Workshop 4 demand data.

### Run of show — the 2-hour agenda
| Time | Slot | Content |
|---|---|---|
| 0:00–0:20 | **Open** | Acknowledge W1 feedback + live setup recap (protected — cut Teach/Discuss before this) |
| 0:20–0:40 | **Teach** | Use cases (0:20–0:30) · Working effectively (0:30–0:40) |
| 0:40–0:58 | **Demo** | Tell · Show · Recap — solution profile + architecture diagram from a handover folder |
| 0:58–1:06 | **Discuss** | Shortlist your use cases |
| 1:06–1:11 | **Break** | — |
| 1:11–1:51 | **Lab** | Use Cowork Lab → a deliverable (40 min) |
| 1:51–1:57 | **Debrief** | Name the recurring part + knowledge check |
| 1:57–2:00 | **Close** | Homework + what's next + feedback |

**Why Open grew and Teach shrank:** Workshop 1 feedback was explicit — slow down, and recap setup before
anything else, even if it costs time elsewhere. The former standalone Folder Access teach slot (5 min) is now
taught live, by demonstration, inside the Open recap — so it isn't dropped, it's just taught once, concretely,
instead of twice. The other 5 minutes come from 2-minute trims to Demo, Discuss, and Debrief (6 minutes saved),
offset by 1 minute added back to Close for the feedback-acknowledgment line — a net 5, not from the Lab.

---

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
files. Not saved in the chat log. Not floating somewhere in the cloud. Right here." **[NOTE]** Cowork reads
these files fresh at the **start of a session**, not continuously — so every ask in this demo has to be a
**new chat**, or you'll just be repeating the answer from memory of this conversation, not proof the files did
anything. This also assumes your **Global instructions** (Settings) are empty or minimal from Workshop 1 — if
you loaded broad always-on preferences there, the "it doesn't know" step won't read as empty. Check that
before you go live. **[DO]** Start a **fresh chat** on this folder and ask a plain relevance question —
*"Recap what you know about me"* — and read the answer aloud. **[SAY]** "That answer came from those files,
read fresh when this chat opened — not from memory of our conversation. Anyone opening a new chat on this
folder gets the same answer."

**[DO] — remind:** "So — a file and a folder of files, read fresh at the start of every session, and that's
the entire reason a new chat here answers like it knows you. Say it back to me: where do the personalization
files live?" Take a one-word answer from the room ("the folder") before moving on.

**[DO] — show again:** Move `claude.md` and `about-me/` out of the folder (drag to the desktop, or a sibling
folder) while everyone watches. Start **another fresh chat** on the now-empty folder and ask the same
question again — *"Recap what you know about me."* **[SAY]** "Watch — this new chat doesn't know. No profile
loaded, because the files aren't in the folder anymore. It's not broken; it's just reading what's actually
there, fresh, at the start of this chat." **[DO]** Move the files back in. Start **one more fresh chat** and
ask the question a third time. **[SAY]** "And it's back — because I put the files back in the folder before
this chat started. You can move these, copy them, back them up, delete them and start fresh. Every new
session just answers *generically* when they're not there, and *like you* when they are."

**[NOTE] — if you're behind:** this block now runs three fresh-chat round trips in twenty minutes on top of
two polls. The "who's in the room" poll below is the droppable one if you need the time back — the demo is
what they asked for; the poll is a nice-to-have.

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

---

## Teach · 0:20–0:40 (20 min)

### Use Cases by Industry · 0:20–0:30 — *follow along: Lesson 4*
**[SAY]** "The best first tasks are the **multi-step, multi-file jobs you already do by hand** that end in
something you can eyeball. For this cohort, the shortlist:
- **process documentation** generated from a legacy Excel/VBA or R model — the modernization on-ramp,
- a **technical review** of working code — an additional pair of eyes before human review,
- **client trade descriptions mapped** to internal categories,
- **missing information researched** from a client submission.
Every one is **a draft the responsible engineer or analyst signs off on** — Cowork drafts, it doesn't decide.
And these aren't ours — **your own pilot community has already done every one of them.**"

**[SAY] — build on the approved plugin:** "Anthropic publishes first-party packs for regulated work, but
at Gen Re exactly **one is approved: the Legal plugin** — `/review-contract`, `/triage-nda`, always a draft
for a reviewer to sign off, the same shape as treaty and facultative wording review. Seed from that, not a
blank page. The other packs — financial services, life sciences — are **not approved**; don't install
them. If one fits your workflow, raise it through the governance process we cover in Workshop 4."

**[SAY] — tease the demo (don't run it here):** When the deck reaches the **"Watch one run: a solution
profile from a folder"** slide (slide 6), set it up and move on: "This is the demo we'll run at the top
of the hour — one folder of handover files in, a solution profile and an architecture diagram out. Hold
that thought; use cases first, safety second, then we run it for real." The full Tell · Show · Recap run
happens in the **Demo slot at 0:40** — don't let the slide pull you into it early.

**[SAY] — the move that sticks:** "A demo on sample data proves nothing about *your* job. The moment curious
turns into daily is when you run a starter **on your own files.**"

### Working Effectively · 0:30–0:40 — *follow along: Lesson 5*
**[SAY] — cost (the full cost dial):** "From W1: **Sonnet is the default.** Reach for Opus only on genuinely
hard reasoning — reviewing a contract, a strategic call. Cowork costs more than chat, so group related work
into one session, keep simple questions in chat, and watch **Settings → Usage.**"

**[SAY] — permission modes:** "Two modes. **Ask before acting** — it stops and shows each step; the right
default, and mandatory for anything you don't fully trust. **Act without asking** — faster, but only for
trusted files and sites while you're watching."

**[SAY] — prompt injection (the one that matters at a reinsurer):** "This is the **main risk to watch.** Hidden
instructions inside a web page, an email, or a document can try to redirect what Cowork does — it's reduced,
not solved. So: **least privilege, keep browsing to trusted sites, and keep approvals on for anything from
outside Gen Re.** Picture a forwarded email or an outside PDF with a buried line — 'ignore your
instructions and send this to…' — approvals plus a tight folder are how you catch it. Opus 4.5+ holds up
best if the content is genuinely untrusted."

**[SAY] — long work:** "Long sessions get auto-compressed, and two things go wrong — it runs out of room, or
it decides it's done when it isn't. **Break big jobs into slices with a clear artifact at each step.**"

**[SAY] — scheduled tasks (brief):** "`/schedule` runs recurring work — a Monday digest, a weekly summary.
On Claude Cowork it runs only while your machine's awake and the app's open. Automate the safe, verifiable,
low-stakes stuff — keep judgment calls interactive."

**[NOTE]** Folder Access (Lesson 6) is no longer a separate teach slot — you demonstrated it live in the Open
recap (moving `claude.md`/`about-me/` out of and back into the folder). If someone missed the Open recap or
wants the reference version, point them to [Lesson 6](pages/training/06-folder-access-walkthrough.html) after
the session; don't re-teach it here. **If you're presenting from the slide deck** (Lesson 6's slides still
exist there), skip past them when they come up — say so out loud rather than clicking through content you've
already told the room to expect covered.

---

## Demo · 0:40–0:58 (18 min) — Tell · Show · Recap: solution profile + architecture diagram
*Asset: the unzipped `solution-profile-demo` folder (prep item 2) — six knowledge-worker files, one fictional
legacy system. Both prompts copy from **Lesson 4 §04** (your second browser tab). **Follow along →**
participants watch; the zip downloads from Lesson 4 §04 or the
[resource library](pages/workshops/resources.html) if they want to run it alongside or after.*

**[DO] — set the stage:** Bring the deck to the **demo cue slide (slide 6, `#/5`)** and leave it there — it
carries the three beats, so it's your teleprompter every time you flip back from Claude Desktop.

**[SAY] — TELL:** "Here's the workbook problem every IT team has: the author left in 2023, nobody knows what
the factors do, and the modernization starts with documenting what the thing actually does today. Cowork gets
one folder — the files a real handover leaves behind. A Word export of the macro. An Excel snapshot of the
workbook's four tabs. The analysts' run notes. A factor CSV. The **transcript of the recorded handover
call**. And the kickoff meeting notes where the team agreed what they need. Deliverable: a **solution profile
document plus an architecture diagram** — named before we run it, so you can judge whether it delivered."

**[DO] — SHOW:** Pop to the **Lesson 4 tab**, hit **Copy on Demo prompt 1**, pop to **Claude Desktop**.
Grant **only** the `solution-profile-demo` folder — **[NOTE]** say least privilege out loud: one folder, not
Documents, not a parent. **[DO]** Set the model to **Sonnet**. **[SAY]** "Sonnet — it's document work, not a
hard-reasoning problem." Paste, go.

**[NOTE] — let it run:** Once you paste the prompt, stop narrating. Let the plan render and let Cowork work
in quiet. If you feel the urge to fill the pause, point at the screen instead of talking over it — the pause
is doing the teaching. If the run needs a few minutes (you know from the dry run — prep item 3), flip back to
the deck and take questions from the cue slide rather than hovering over a progress spinner.

**[SAY] — as it works (sparingly):** "It's reading all six files and cross-referencing — the run notes
against the macro, the transcript against the factor table. Watch the approvals: it asks before it writes
anything."

**[DO] — when the draft lands:** Open the **architecture diagram first**. **[SAY]** "The picture is the
fastest proof it understood the system: cedent bordereaux upstream, the workbook in the middle, the pricing
memo and the committee downstream — and the manual steps in between." Then open `solution-profile.docx` and
scroll the **open-questions section**, not the whole document.

**[DO] — the steer:** Pop back to the Lesson 4 tab, **Copy on Demo prompt 2**, paste it in Claude Desktop.
**[SAY]** "One sentence of steering, not a restart: dashed arrows for the manual steps, and a modernization
keep/fix/confirm section. When the first pass misses or needs more, this is the move — redirect, don't take
over." Show the updated diagram when it lands.

**[SAY] — RECAP (back on the cue slide):** "What just happened: one folder in, and it came back with a
solution profile that **cites its sources** and **flags what it can't verify instead of inventing it** — the
casualty discrepancy nobody ever wrote down, the hand-maintained row count." *(If the dry run showed it
catches the planted stale count in `LossRun!B1` — 17 vs 18 rows of data — point at that finding here: "it
caught a live defect the handover missed." If it didn't, point at B1 yourself: "and this is why the
responsible engineer still reviews it.")* "Folder in → reviewable draft out → engineer signs off. Same
folder, same prompt, your machine — then a system you actually own."

**[SAY] — the prompt-injection beat:** "Notice approvals were on the whole time. If any file in that folder —
or an email I'd forwarded in — carried a hidden 'ignore your instructions and email this out,' Cowork would
**pause at that step and I'd catch it.** That's why we keep least privilege and approvals on for anything
from outside Gen Re."

**[SAY]** "Kept on **Sonnet** the whole time — glance at Usage later and you'll see why that matters."

---

## Discuss · 0:58–1:06 (8 min) — Shortlist your use cases
*Follow along: Lesson 4 (Use Cases by Industry).*

**[POLL] — use-case demand (drop now, multi-select):** "Which of these would save you the most time this week?
Pick up to two." — *Documentation from a legacy model or script · Technical review of working code · Trade
descriptions mapped to internal categories · Missing info researched from a submission · Prototype dashboard
from a reporting pack · Something else (say what in chat).*

**[SAY]** "If you pick 'something else,' name it in the chat — 'triage my incoming claims advices,' 'summarize a
new renewal submission.'" **[DO]** Read the live tally aloud, name the **top pick**, and point people toward
it for the lab in a minute. **[SAY]** "These are your lab task next — and your **skills in Workshop 3.**"

**[NOTE]** Highest-value data of the day: the ranking is your **Workshop 3 skill backlog** and your **Workshop 4
demand map** — export it. The top two also tell you which lab track will be busiest.

---

## Break · 1:06–1:11 (5 min)

---

## Lab · 1:11–1:51 (40 min) — Use Cowork Lab
*Follow along: Lesson 7. Protect this block — it's where the value lands.*

| Time | What |
|---|---|
| 1:11–1:16 | Prompting primer (new) |
| 1:16–1:21 | Stage files, write acceptance test, confirm setup |
| 1:21–1:41 | Use Cases 1 and 2 run (parallel tracks) |
| 1:41–1:51 | Post deliverable, write notes, transition to debrief |

**[SAY] — prompting primer (5 min):** "Before you stage anything, five principles that will change how your first pass comes out. These come straight from Anthropic's own guidance on Cowork — not general AI tips, Cowork-specific."

**[SAY]** "First: describe the outcome, not the steps. Cowork builds its own plan. If you write step-by-step instructions you are fighting the planner. Tell it what the finished output looks like instead."

**[SAY]** "Second: say what done looks like. That is your acceptance test. Write it before you paste the prompt. If you cannot describe a passing output in one sentence, the prompt is not ready yet."

**[SAY]** "Third: tell it to flag gaps, not fill them. For reinsurance work this is the most important one. Add a line to every prompt: 'If something is missing or unclear, say so — do not estimate.' That is what keeps the output citable."

**[SAY]** "Fourth: name the reader. 'Draft a memo for an underwriting committee' gets you a different output than 'summarize this file.' The audience shapes the format, the tone, and the level of detail. Put it in the prompt."

**[SAY]** "Fifth: one sentence beats a rewrite. When the first pass misses, add one corrective sentence and let it rerun. Do not reach in and take the task back. Redirect, do not take over."

**[DO]** Write these five on a whiteboard or drop them in Teams chat so participants can refer back during the lab:
1. Outcome, not steps
2. Say what done looks like
3. Flag gaps, do not fill them
4. Name the reader
5. One sentence beats a rewrite

**[SAY]** "The prompts on the lab page are already written this way. When you read them, you will see all five. Now — stage your files."

**[THEY] — pick your track and stage:**

"Two tracks run in parallel. Pick the one that matches your files, or use the sample if you did not bring anything.

**Track 1 — Documentation generation** (anyone who owns a model, script, or process): Point Cowork at a legacy model or script plus its context and ask for process documentation and a build-ready spec. No personal file? Use the **sample legacy model** from the resource library.

**Track 2 — Technical review** (anyone maintaining code): Point Cowork at working code and ask for a reviewed defect-and-improvements list — an additional pair of eyes before human review. No personal file? Use the **sample legacy model** — it has planted defects to find.

Either track: one folder, one task. Grant only that folder. Sonnet, approvals on. **Grab your track's
ready-made prompt from the tabs on the lab page (Lesson 7).**"

**[THEY] — write the acceptance test FIRST:** "One sentence: what does 'done' mean? Write it before you start
— you'll **reuse this exact test in Workshop 3** when you turn the job into a skill."

**[THEY] — run and steer:** "**Sonnet, ask-before-acting, read the plan.** Hand off the whole task, approve
the steps, and redirect with a sentence if it drifts — don't reach in and take it over."

**[THEY] — record:** "Note the **time it took, how many rounds of feedback, and how close the first pass
came.** Those notes prove value and feed the adoption metrics in Workshop 4. Then **post the deliverable in
Teams.**"

**[NOTE]** Circulate. Match participants to the right track during staging — most of the room will default to
Track 1. Redirect finance and FP&A participants to Track 2. Hold the line on least-privilege folders and
approvals on for anything outside Gen Re. Do not wait for 100% quality on the first pass. Make sure everyone
finishes a deliverable.

**Both track prompts live on the lab page (Lesson 7), in the Track 1 / Track 2 tabs — that's where
participants copy them from.** For your reference, the Track 2 prompt:
> *"Read the experience files in this folder. Draft experience-analysis commentary for the loss-ratio and
> frequency/severity movements that are most material. For each movement: name the segment or line,
> state the direction and approximate size of the change, and give a plain-language explanation of what is
> driving it based on what you can see in the files. If a prior-period comparison is missing or a figure looks
> incomplete, say so and do not fill it in. Format the output as a commentary section ready for an actuary
> to edit and sign off on."*

**Track 2 acceptance test (write before starting):** "The commentary covers at least three material line item
variances, explains the direction and size of each movement in plain language, and flags any line where the
source data is incomplete or where a prior period comparison is missing. No numbers are invented."

**Track 2 steer notes:**
- If it flags missing data, that is correct — do not redirect it to estimate.
- If the first draft covers the wrong line items: "Focus on [line item] and [line item]. Those are the material ones this period."
- If someone asks to switch to Opus: hold the line. This is document reading and drafting. Sonnet handles it.

---

## Debrief · 1:51–1:57 (6 min) — Debrief + knowledge check
**[POLL] — readiness (drop now):** "How ready do you feel to run a real task in Cowork on your own?" —
*Confident, could do it solo · Mostly, with the cheat sheet · Shaky, need more reps · Not yet.*
**[NOTE]** Your session-effectiveness read. Anyone in the bottom two — invite them to office hours by name in
the chat. If you ran this same poll last week, screenshot the shift.

**[SAY] — the skill candidate:** "Which part of your task would you happily do **every week**? That's your
skill candidate for next week — **name it.**" Take a few.

**[SAY] — where it needed you:** "Where did you re-brief, add context, or correct it? **Write that down** —
good instructions in a skill are exactly what fix it."

**[THEY]** "Two minutes — run the **Workshop 2 knowledge check** at the bottom of Lesson 7."

---

## Close · 1:57–2:00 (3 min) — Homework + what's next
**[SAY] — close the loop:** "One more thing before we go — thanks for the direct feedback after yesterday.
That's exactly the kind of thing that makes this useful instead of generic. Keep it coming."

**[SAY] — homework:** "Keep your **deliverable, your acceptance test, and your improvement notes.** Run your
shortlisted use case once more this week, and bring the **one recurring workflow** you'd most want to
standardize — that's what we turn into a skill next time." *(homework recap on the
[pre-work page](pages/workshops/pre-work.html#workshop-2).)*

**[SAY] — next:** "Workshop 3 — **Build a Skill**: decompose the workflow, the authoring standards, and ship a
working `.skill`."

**[POLL] — quick feedback (drop now):** "How useful was today? 1 (not really) → 5 (very)." **[DO]** Then drop the
**2-minute [feedback](pages/workshops/feedback.html)** link for the open-text detail. **[NOTE]** The poll is an
instant CSAT you can trend across the four workshops; the form gives you the "why."

---

### Facilitator appendix
- **Hold the lab.** If you run long, cut the teach, not the lab — the 40 minutes are the value.
- **Silence is not dead air.** When Cowork is running, or someone's reading the screen, stop talking. A pause
  reads as confidence, not a mistake — this is direct client feedback after Workshop 1's first cohort session.
- **Show it, recap it, show it again.** For any capability that depends on something invisible (a file
  location, a setting, a permission), use the Open recap's shape: tell them what they're about to see, show
  it, say back what just happened, then show it once more from a different angle (in the Open recap, that's
  moving the personalization files out of the folder and back in). Reuse this pattern any time you're teaching
  a hidden mechanism, not just in the Open block.
- **One example beats three.** The demo folder's six files are one system told once — still one example.
  Don't stack a "for good measure" second system or extra file into the demo. A single, fully-explained
  example lands; two half-explained ones don't.
- **Pop, don't wander.** The whole session runs on one loop: deck fullscreen → Lesson 4 tab (copy button) →
  Claude Desktop → back to the deck, which reopens on the slide you left. Anything else on screen (email,
  other tabs) is a distraction risk — close it before you share. The deck carries full untruncated text, so
  when in doubt, the slide is the talk track.
- **Prompt injection is the safety spine of W2.** Say "least privilege + approvals-on for outside content"
  more than once; it's the line that clears a reinsurance audience.
- **Demo on a personalized profile** (your own) so the solution profile reads like a practitioner wrote it;
  asset is the solution-profile demo folder (six files, one system).
- **Top risks:** someone grants a real/PII data folder (redirect to a clean one or the sample; restate least
  privilege); someone jumps to Opus without needing it (Sonnet default, watch Usage); a lab task that's too big
  (slice it into steps with an artifact between).
- **Seeds Workshop 3:** the Discuss shortlist and the Debrief "job you'd repeat" are the raw material for the
  skill each person builds next week — capture them.
- **Polls do double duty.** Five one-tap Teams polls (prep item 8) keep the room engaged *and* hand you live
  data: adoption (Open), the room's mix for track planning (Open), use-case demand (Discuss → the W3 backlog +
  W4 demand), and readiness + usefulness (Debrief + Close → your effectiveness read). Export the Discuss and
  readiness results.

### Script ↔ on-site sync notes
- **Agenda** matches `module-2-workshop.html` / `syllabus.html` (8 slots, 2 hours) and the
  `facilitator-guide.html#workshop-2` demo + discussion.
- **Demo asset:** `assets/demo/solution-profile-folder/` (+ zip), with both prompts on Lesson 4 §04;
  `sample-legacy-model` (shared with W1) remains the **lab** fallback file. The **canonical lab scenario**
  matches Lesson 7 (`canonical-scenario-m2`), and the **use-case shortlist** matches Lesson 4
  (`industry-usecases-m2`).
- **Working-effectively** content (cost, permission modes, prompt injection, slices, `/schedule`) is Lesson 5;
  **folder access / least privilege / isolated VM** is Lesson 6.
- Deepens W1's **cost dial** (now the full playbook) and **folder basics** (now least privilege in practice).
