# Legacy Model Pack — Treaty Layer Loss Estimator (Excel/VBA)

> **FICTIONAL TRAINING SAMPLE — not a real Gen Re model.** Created for the Gen Re Cowork
> Workshop 2 lab (Track 1 — documentation generation · Track 2 — technical review). The code
> is deliberately imperfect: it contains a small number of realistic defects for the review
> track to find. Do not reuse outside training.

## Context (what the analysts told us)

This workbook has priced structured property treaty layers since ~2014. The original author has
left the company. It is used quarterly: an analyst pastes the cedent's loss run into the
`LossRun` tab, sets the layer terms on `Inputs`, and runs `PriceLayer` from the macro menu. The
output lands on `Results`. Nobody currently knows exactly what the trend and development factors
do, and IT has been asked to modernize the workbook into the new Python platform — which starts
with documenting what it actually does today.

- **Tabs:** `Inputs` · `LossRun` · `Factors` · `Results`
- **Run cadence:** quarterly, per treaty; ~40 treaties a quarter
- **Known quirk:** results for casualty layers "have never quite tied out" and get adjusted by hand

## Module 1 — `mod_PriceLayer` (VBA, as found)

```vb
Const TREND As Double = 0.05          ' annual trend, set 2019, never revisited

Function TrendLoss(loss As Double, yrs As Integer) As Double
    ' Trend a historical loss to the prospective period
    TrendLoss = loss * (1 + TREND) ^ yrs
End Function

Function LayerLoss(gross As Double, att As Double, lim As Double) As Double
    ' Loss to the layer: attachment att, limit lim
    If gross < att Then
        LayerLoss = 0
    Else
        LayerLoss = gross - att
        If LayerLoss > lim Then LayerLoss = lim
    End If
End Function

Sub PriceLayer()
    Dim i As Integer, n As Integer
    Dim tot As Double, prem As Double
    n = Sheets("LossRun").Range("B1").Value      ' row count, maintained BY HAND
    tot = 0
    For i = 2 To n                                ' data starts on row 2
        Dim g As Double, y As Integer
        g = Sheets("LossRun").Cells(i, 3).Value   ' col C: gross loss
        y = Year(Date) - Sheets("LossRun").Cells(i, 2).Value  ' col B: loss year
        tot = tot + LayerLoss(TrendLoss(g, y), _
              Sheets("Inputs").Range("B2").Value, _
              Sheets("Inputs").Range("B3").Value)
    Next i
    ' expected layer loss = trended total / years of experience
    prem = (tot / Sheets("Inputs").Range("B5").Value) _
           * Sheets("Factors").Range("B2").Value   ' LDF, all years the same
    Sheets("Results").Range("B2").Value = prem
    Sheets("Results").Range("B3").Value = prem / Sheets("Inputs").Range("B4").Value  ' rate on line; B4 = limit
End Sub
```

## What the modernization team needs

1. **Process documentation** a new analyst could follow: what each tab holds, what the macro
   does step by step, every input it depends on, and every place a number could silently go wrong.
2. **A defect and risk list** before the Python port: anything hardcoded, hand-maintained,
   untested, or mathematically doubtful — each with the line it lives on and what could go wrong.
3. **A spec** the Python platform team can build from: inputs, transformations, outputs, and the
   business rules in plain language.
