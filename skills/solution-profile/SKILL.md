---
name: solution-profile
description: Documents a legacy system from a folder of handover material — macro exports, run notes, workbook snapshots, call transcripts, kickoff notes — producing a cited solution profile document plus an as-is architecture diagram that a new engineer or analyst could rely on. Use when someone asks to "document this legacy system", "write a solution profile", "profile this workbook", "document what this tool does", or "prepare handover documentation", especially for legacy Excel/VBA models, scripts, or tools facing modernization in regulated, document-heavy work.
---

# Solution Profile

Turn a folder of legacy-system leftovers into the document a real handover never leaves
behind. The input is whatever exists — a macro export, analysts' run notes, a workbook
snapshot, a factor export, a recorded call transcript, meeting notes. The output is
always a **draft for the responsible engineer to sign off on** — never the final word.

## When to run

- The user points at a folder documenting a legacy system, model, script, or tool and
  wants it documented, profiled, or prepared for handover or modernization.
- A new engineer or analyst is inheriting something the original author no longer supports.

## Inputs

- The folder of source material. Read everything in it before writing anything.
- Optional: the modernization target (e.g. "porting to Python"), which sharpens the
  dependencies and modernization sections.

## The solution profile document

Save it as a Word document (`solution-profile.docx`) in the source folder, with these
sections:

1. **Purpose and business context** — what it does and why it matters.
2. **Users, owner, and run cadence.**
3. **How it runs today** — the process step by step, including every manual step around
   the tool.
4. **Inputs and data sources** — everything it reads and where it comes from.
5. **Outputs and consumers** — where results go and who uses them.
6. **Dependencies and assumptions** — hardcoded values, hand-maintained cells, single
   points of failure.
7. **Known risks and quirks** — each with the file and line or cell it lives on.
8. **Modernization considerations** — what a re-platforming team should keep, fix, or
   confirm before porting.
9. **Open questions** — anything the sources don't explain. Do not invent answers.

## The architecture diagram

Create an as-is diagram and save it alongside the document as its own file the reviewer
can open (an image or an HTML page): upstream sources, the tool's components, every
manual step, and the downstream consumers. **Solid arrows for automated flows, dashed
arrows for what a person does by hand** — the manual steps are usually the finding.
Reference the diagram from the document.

## Rules that make the output trustworthy

- **Cite the file (and line or cell) for every claim** — an uncited claim is not usable
  in a sign-off review.
- **Cross-reference the sources**: run notes against the code, transcripts against the
  data. Where they disagree, say so — a discrepancy is a finding, not a formatting
  problem.
- **Flag gaps, don't fill them.** If the sources don't explain something, it goes in
  Open questions, because an invented answer would survive review and become "fact."

## Good vs. bad output

**Good** — every claim cited to a file and cell; the hand-maintained row count and the
hardcoded constant surface in Dependencies with locations; the diagram distinguishes
manual from automated; unknowns are listed as open questions.

**Bad** — reads like a plausible description of a generic pricing workbook; asserts what
the factors do without citing where; the diagram is boxes with arrows that all look the
same; no open questions, because everything was confidently invented.

## Guardrails

- Never present the profile as final. It is a draft for the responsible engineer.
- Never fabricate a value, formula meaning, or process step. Unknown → Open questions.
