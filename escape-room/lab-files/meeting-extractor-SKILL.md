---
name: meeting-extractor
description: Extracts every action item from meeting notes, standups, committee minutes, or project updates and formats them as a structured Markdown table with columns for Owner, Action, and Deadline. Use when someone asks to "pull the action items from this meeting," "extract actions from these notes," "list who is doing what after this standup," "get the next steps from these minutes," "show me the tasks from this meeting," or "summarise what everyone needs to do." Ideal for weekly standups, project check-ins, credit committee notes, and any document where tasks are assigned to named individuals.
---

# Meeting Extractor

Extract every explicit action item from the input and present them in a clean table. No summaries and no inferred tasks — only what is directly stated in the document.

## Output format

Produce a single Markdown table with three columns, in the exact order the items appear in the document:

| Owner | Action | Deadline |
|---|---|---|

- **Owner**: the person's name as written in the notes.
- **Action**: the task as stated, starting with the verb. Do not paraphrase or reword.
- **Deadline**: the date or time if stated in the same sentence; otherwise write "—".

After the table, add one summary line:
`Total: [N] action items across [M] owners.`

## Rules

1. **Preserve document order.** Do not sort, group, or reorder items.
2. **Extract only explicit actions.** Include every item marked as an action, task, or next step. Exclude discussion points, decisions, and status updates that carry no action.
3. **Do not infer deadlines.** If a deadline is not stated in the same sentence or bullet as the action, write "—".
4. **Do not add, omit, or combine items.** Every action in the document gets exactly one row.
