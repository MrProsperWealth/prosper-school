# CASE-01 - Current Rollover Messy No-Trade

Status: captured

Screenshot: `media/evidence_pack/case01_current_rollover_messy_dont_trade.png`

## Chart Read

- Capture date: 2026-07-11.
- Bar time from TradingView quote: 2026-07-10 21:00 BST.
- Symbol/timeframe: `OANDA:XAUUSD`, H1.
- Marker: `PROSPER XAU H1 Asian Range Marker v2.2`.
- Marker state: `PROSPER XAU H1 | ROLLOVER`.
- Range: `MESSY 1.87 ATR`.
- Updates: `8 / 8`.
- Spike: `0.86 / 0.65`.
- Daily: `BEAR`.
- EMA: `MIXED`.
- DXY: `DXY UP CTX`.
- Lock: `ROLLOVER`.
- R: `2R`.
- Action row: `DON'T TRADE`.

## Decision

Correct decision: skip and journal only.

Why:

- Range is messy.
- Spike exceeds the allowed limit.
- EMA is mixed.
- Rollover lock is active.
- Action row says `DON'T TRADE`.

## Rule Score

Score: 10/10.

- Correct symbol/timeframe: pass.
- Asian box visible and understood: pass.
- Range quality graded: pass.
- Daily bias checked: pass.
- H1 EMA stack checked: pass.
- H1 close versus wick: not a trade candidate, correctly ignored.
- News/lockout checked: pass.
- Action row read without replacing checklist: pass.
- Stop/TP/18h time exit: not applicable because no trade.
- Final decision matches frozen rules: pass.

## Drill Question

The chart feels active and XAU is moving, but the marker says rollover, range is messy, spike is over the limit, EMA is mixed, and Action row says `DON'T TRADE`. What do you do?

Answer: no trade. Journal the skip. The best rep is obeying the block.

## Lesson

A no-trade can be the highest-quality decision of the day. The system is not trying to catch every move; it is trying to remove low-quality decisions.

