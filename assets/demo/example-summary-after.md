# Legacy Model Summary — Treaty Layer Loss Estimator

> **Example output — AFTER co-setup (Maya Chen's profile).** Same file, same prompt — now a
> stand-up-ready summary: bottom line first, defects cited line by line, open questions separated
> from findings, in the engineer's voice.

**Prepared for:** Modernization stand-up · **Author:** Maya Chen, Analytics Engineering · **Status:** Draft for review

## Bottom line
This workbook prices structured property treaty layers from a pasted loss run. The logic is simple
enough to port, but **five defects need decisions before the Python build starts** — two of them
(the trending basis and the rate-on-line input) likely explain why casualty results "never quite
tie out." Nothing below is guessed; every claim cites its line.

## What it does
Quarterly, per treaty (~40/quarter): analyst pastes the cedent loss run into `LossRun`, sets
attachment/limit/terms on `Inputs`, runs `PriceLayer`. Trended losses are sliced to the layer,
averaged over the experience period, developed by a single LDF, and written to `Results` as
premium and rate on line.

## Defects & risks to resolve before porting
1. **Hand-maintained row count** — `LossRun!B1` drives the loop bound; a stale count silently
   drops or double-counts losses (`n = Sheets("LossRun").Range("B1")`).
2. **Trend constant hardcoded at 5% since 2019** — `Const TREND As Double = 0.05`; never
   revisited, no source cited.
3. **Trending basis is wrong** — years are computed off **today's date** (`Year(Date) - loss
   year`), not the prospective period, so results change depending on when the macro is run.
4. **One LDF for all years** — `Factors!B2` is applied uniformly; immature years are
   under-developed, which fits the casualty tie-out complaint.
5. **Rate on line reads the wrong cell** — divides by `Inputs!B4` where the limit is set in
   `Inputs!B3` (`prem / Sheets("Inputs").Range("B4")`).

## Open questions for the model owners
- What is `Inputs!B5` (the divisor labeled "years of experience") actually set to in practice?
- Is the manual casualty adjustment documented anywhere, or tribal knowledge?
- Where did the 5% trend and the single LDF originally come from?

*Draft for review. Every claim cites the line it came from; defects are flagged, not fixed.
The platform team decides the remediations.*
