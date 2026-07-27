# Model Summary — Treaty Layer Loss Estimator

> **Example output — COLD run (before co-setup).** What Cowork returns when it doesn't know who you are:
> accurate, but generic. No defect list, no cited lines, no stand-up framing. Compare with the
> "after" example.

## Overview
The file describes an Excel/VBA workbook that has been used since about 2014 to price structured
property treaty layers. An analyst pastes a cedent loss run into the LossRun tab, sets layer terms on
the Inputs tab, and runs the PriceLayer macro. Output is written to the Results tab.

## Structure
The workbook has four tabs: Inputs, LossRun, Factors, and Results. It is used quarterly across roughly
40 treaties. The original author has left the company.

## What the code does
The module defines a trend constant of 5% and two helper functions. TrendLoss trends a historical loss
forward by a number of years. LayerLoss calculates the loss to a layer given an attachment and a limit.
The PriceLayer subroutine loops through the loss run, trends each loss, applies the layer terms from
the Inputs tab, divides the total by the number of years of experience, multiplies by a loss
development factor from the Factors tab, and writes the resulting premium and a rate-on-line figure
to the Results tab.

## Other notes
The documentation mentions that the row count is maintained by hand, that results for casualty layers
have not tied out historically and are adjusted manually, and that IT has been asked to modernize the
workbook into a Python platform.
