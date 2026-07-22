# Cowork Access Rubric — Least Privilege Standard

Gen Re Information Security · applies to every Claude Cowork folder grant.

Cowork's real data control is **folder scope**: a user picks which folders Claude may read from and
write to, and there is no finer-grained per-file permission. So the grant *is* the control. Every row
in the access register is tested against the four rules below.

A row is **non-compliant** if it breaks **one or more** rules. Count each row once, no matter how many
rules it breaks.

---

## LP-1 · Scope to a named project folder

The granted folder must be a specific project subfolder. A grant is non-compliant if `folder_granted`
is a drive root, a cloud-drive root, or a bare user folder with no project subfolder beneath it.

**Non-compliant examples:** `C:\` · `OneDrive - Gen Re\` · `Desktop` · `Documents`
**Compliant example:** `Projects\Submissions\2026-Q3`

*Why:* granting a root hands Cowork every file the user can see. Scope is the only thing standing
between a delegated task and the whole drive.

## LP-2 · Restricted data requires approvals

If `data_class` is **Cedent Confidential**, **Cedent Submissions**, **Claimant PHI**, or **Board
Material**, then `permission_mode` must be **Ask before acting**. `Act without asking` on restricted
data is non-compliant.

*Why:* approval decisions are one of the few Cowork events that reach your SIEM. Turning approvals off
on restricted data removes the human checkpoint *and* the telemetry that proves one existed.

`Internal` data may run in either permission mode.

## LP-3 · Contractors get no connectors

If `worker_type` is **Contractor**, then `connector_access` must be **None**. Any other value is
non-compliant.

*Why:* connectors reach live systems through Anthropic's cloud with the user's own delegated
permissions. Contractor identities are not in scope for that reach.

## LP-4 · Every grant has a named reviewer

`reviewer` must not be blank. An unowned grant is non-compliant.

*Why:* access reviews need a person to sign off. A blank reviewer means nobody re-attests this grant
when the user changes roles.

---

## What the review must produce

For each non-compliant row: the user, the department, which rules it breaks, and the remediation.
Then two totals — **the number of non-compliant rows**, and **which single row breaks the most rules**.
