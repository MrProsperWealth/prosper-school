# PROSPER XAU H1 20-Case Evidence Pack

Created: 2026-07-11

Purpose: build a real visual model book for Prosper and Gemma using the live TradingView chart with `PROSPER XAU H1 Asian Range Marker v2.2`.

Hard boundary: this pack is course and evidence work only. It does not change Pine Script, marker logic, or trading rules.

## Source Of Truth

- Symbol/timeframe: `OANDA:XAUUSD`, H1.
- Marker: `PROSPER XAU H1 Asian Range Marker v2.2`.
- Tradeable model: clean Asian range + daily bias + H1 EMA stack + H1 breakout close in session + no lockout.
- Execution: after the H1 breakout close, next H1 open / broker order after close.
- Risk: start at 0.25%, one trade per day, 2R target, stop opposite range, 18h max hold.
- Context only: DXY, PO3, gap closure, cup and handle, flags, UKDT-style levels.

## What Counts As A Finished Case

Each case needs:

1. Screenshot of the marked chart.
2. Date/time in UK time.
3. Marker state and Action row.
4. Decision: trade, wait, skip, or journal only.
5. Rule-by-rule grade.
6. Outcome in R if it was a valid marked trade.
7. One lesson learned.
8. Prosper/Gemma drill question.

## Target Mix

The pack is complete when it has 20 filled cases:

- 4 clean winners where the setup reaches +2R.
- 3 clean losers where -1R is accepted properly.
- 2 time exits or trades that do not hit stop/target before the 18h right edge.
- 4 messy/no-trade days caused by updates, spike, range/ATR, or rollover.
- 3 wick-only or false-break traps.
- 2 daily/EMA disagreement skips.
- 1 context-only pattern case: cup/handle, flag, DXY, PO3, or gap idea does not override the checklist.
- 1 rule-breach prevention case: green TP zone is not permission, or `TRADE TAKEN - no re-entry` blocks a second trade.

## Capture Workflow

1. Open TradingView Desktop with CDP enabled.
2. Open `OANDA:XAUUSD`, H1.
3. Confirm marker v2.2 is loaded.
4. Scroll back to a retained marker signal or candidate no-trade day.
5. Capture screenshot.
6. Fill a case file in `evidence_pack/cases/`.
7. Add the row to `evidence_pack/case_register.csv`.
8. Use the same case as a video recording candidate if it matches a lesson package.

Helpful CLI commands:

```bash
cd /Users/prosper/tradingview-mcp-jackson
node src/cli/index.js state
node src/cli/index.js data tables --filter "PROSPER XAU H1"
node src/cli/index.js data labels --filter "PROSPER XAU H1" --max 80 --verbose
node src/cli/index.js data boxes --filter "PROSPER XAU H1" --verbose
node src/cli/index.js screenshot --region chart --output caseXX_short_name
```

The screenshot command writes to `/Users/prosper/tradingview-mcp-jackson/screenshots/`. Copy finished images into `media/evidence_pack/`.

## Scoring

Each case gets a rule score out of 10:

- 1 point: correct symbol/timeframe.
- 1 point: Asian box visible and understood.
- 1 point: range quality correctly graded.
- 1 point: daily bias checked.
- 1 point: H1 EMA stack checked.
- 1 point: H1 close versus wick correctly identified.
- 1 point: news/lockout checked.
- 1 point: Action row read without replacing the checklist.
- 1 point: stop/TP/18h time exit understood.
- 1 point: final decision matches the frozen rules.

Readiness target: latest 20 decisions at 90%+ rule score, no rule breach in the latest 10 decisions, and at least 30 journalled signals before funded risk.

## Current Status

- Case 01 is captured: current live rollover/messy no-trade.
- Cases 02-20 are queued for scroll-back capture from real marker output.

