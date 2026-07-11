# PROSPER XAU H1 Video Lesson Packages - Remaining Series

Created: 2026-07-11

Audience: Prosper and Gemma only.

Boundary: these are lesson packages for real TradingView recordings. Do not generate fake chart footage. Do not write Pine Script. Do not change trading rules.

Already shipped in the course:

- Lesson 1: Reading One Candle.
- Lesson 4: The Signal: Breakout Close.

This file completes lessons 2, 3, 5, 6, 7, 8, 9, and 10.

## Lesson 2 - Reading The Marker

Learning goal: understand the marker as a visual checklist, not as permission to skip thinking.

Target length: 90 seconds.

### Narration Script

1. This is the PROSPER XAU H1 marker.
2. It turns the checklist into something you can see.
3. Start with the teal box.
4. That is the Asian range.
5. Then read the state table.
6. The table tells you where the day is.
7. Look for range quality, daily bias, EMA stack, lockout, and R.
8. The Action row is at the bottom.
9. It may say wait, buy next H1 open, sell next H1 open, trade taken, or don't trade.
10. The Action row is a summary.
11. It does not replace the checklist.
12. If the chart says don't trade, we stand down.
13. If it says buy or sell next H1 open, we still confirm every rule.
14. Slow is smooth.
15. Smooth is how we avoid silly trades.

### Shot List

1. Show full XAUUSD H1 chart with marker visible. Narration lines 1-2.
2. Zoom to teal Asian box. Narration lines 3-4.
3. Zoom to state table. Narration lines 5-7.
4. Zoom to Action row. Narration lines 8-11.
5. Show a `DON'T TRADE` day. Narration line 12.
6. Show a retained historical `BREAKOUT CLOSE` with `EXEC @ price`. Narration line 13.
7. End on full chart. Narration lines 14-15.

### Caption Cues

- This is the PROSPER marker.
- It shows the checklist.
- Start with the teal box.
- That is the Asian range.
- Then read the state table.
- The Action row is summary.
- It is not permission alone.
- If unsure, stand down.

### Recap Card

- The box is the overnight range.
- The table gives the marker state.
- The Action row summarises, but the checklist decides.

Quiz: If Action says `DON'T TRADE`, what is the trade?

Answer: no trade.

## Lesson 3 - Clean Box vs Messy Box

Learning goal: spot whether the Asian range is usable before thinking about entry.

Target length: 120 seconds.

### Finding Real Examples

Find two real historical days:

- Clean day: a contained Asian box, no repeated expansion, no huge dominance candle, range inside limits.
- Messy day: marker state `MESSY RANGE`, updates greater than the limit, spike greater than limit, or range/ATR outside limits.

Do not invent dates. Scroll until the marker and visuals show the contrast clearly.

### Narration Script

1. Before we look for a breakout, we judge the box.
2. A clean box looks contained.
3. Price spends the Asian session inside a readable high and low.
4. The levels do not keep expanding again and again.
5. Now compare the messy day.
6. Messy means the box is not reliable enough.
7. It might have too many updates.
8. It might have one spike candle that dominates the session.
9. Or the range might be too wide or too tight versus ATR.
10. A messy box blocks the day.
11. We do not rescue it with DXY, PO3, or a nice-looking pattern.
12. Clean first.
13. Then breakout.
14. If the box fails, the whole day is journal only.

### Shot List

1. Show clean historical day, zoomed to Asian box. Narration lines 1-4.
2. Show state table on clean day. Narration lines 2-4.
3. Cut to messy historical day. Narration lines 5-9.
4. Zoom to `MESSY RANGE` and Action row. Narration line 10.
5. Show any nearby tempting move after messy range. Narration lines 11-14.

### Caption Cues

- Judge the box first.
- Clean means contained.
- Messy means unreliable.
- Too many updates blocks.
- A spike can block.
- Wide or tight can block.
- Context cannot rescue it.
- Failed box means journal only.

### Recap Card

- Clean range comes before any entry idea.
- Repeated expansion and spike dominance are warning signs.
- Messy range means no funded trade.

Quiz: Can a strong-looking breakout rescue a messy range?

Answer: no. Failed box means no trade.

## Lesson 5 - The Trap: Wick-Only Break

Learning goal: wait for the H1 candle close instead of chasing a poke outside the box.

Target length: 90 seconds.

### Finding Real Examples

Find a real day where price pokes outside the Asian high or low, but the H1 candle closes back inside or too close to the range. The best example has a visible wick outside the box and no valid `BREAKOUT CLOSE` label.

### Narration Script

1. This is one of the easiest mistakes.
2. Price pokes outside the box.
3. It feels like the move has started.
4. But the candle has not closed yet.
5. The wick only tells us price visited that level.
6. It does not tell us price accepted that level.
7. Our rule is the H1 close.
8. If the candle closes back inside the box, there is no signal.
9. We do not trade the poke.
10. We wait for the body to close beyond the range.
11. The close is the truth.

### Shot List

1. Show full chart before the poke. Narration lines 1-4.
2. Zoom to wick outside Asian high/low. Narration lines 5-6.
3. Show candle close back inside or not beyond buffer. Narration lines 7-9.
4. Show no `BREAKOUT CLOSE` / Action row not permitting entry. Narration line 10.
5. End on candle body versus wick. Narration line 11.

### Caption Cues

- The poke is tempting.
- But it is only a wick.
- Wick means price visited.
- Close means price accepted.
- We need H1 close.
- No close, no signal.
- The close is truth.

### Recap Card

- A wick outside the box is not a trade.
- The H1 candle must close beyond the range.
- Waiting avoids false breaks.

Quiz: What matters more, wick poke or H1 close?

Answer: H1 close.

## Lesson 6 - The Zones Are The Plan

Learning goal: read STOP, TP, printed prices, and the 18h right edge without treating zones as entry permission.

Target length: 100 seconds.

### Narration Script

1. After a valid signal, the marker draws the plan.
2. Red is the STOP zone.
3. It shows the risk from entry to minus 1R.
4. Green is the TP zone.
5. It shows the target from entry to plus 2R.
6. The prices are printed inside the zones.
7. The `EXEC @` label shows the planned entry price.
8. The right edge of the zones matters.
9. It is the 18-hour time exit.
10. If price is still inside the zones at that edge, the trade is closed.
11. But the zones do not give permission by themselves.
12. The checklist gives permission.
13. The zones show the plan after permission.

### Shot List

1. Show retained valid signal with `BREAKOUT CLOSE`. Narration line 1.
2. Zoom to red STOP zone and printed price. Narration lines 2-3.
3. Zoom to green TP zone and printed price. Narration lines 4-6.
4. Zoom to `EXEC @ price` label. Narration line 7.
5. Pan to right edge of zones. Narration lines 8-10.
6. Show checklist or state table. Narration lines 11-13.

### Caption Cues

- The marker draws the plan.
- Red is stop risk.
- Green is target.
- Prices are printed.
- `EXEC @` is entry.
- Right edge is time exit.
- Zones are not permission.
- Checklist comes first.

### Recap Card

- Red zone = planned -1R risk.
- Green zone = planned +2R target.
- Zone right edge = 18h time exit.

Quiz: Can you enter just because the green TP zone appears?

Answer: no. Run the checklist.

## Lesson 7 - Cup And Handle: Vocabulary, Not A Signal

Learning goal: recognise the phrase without letting it contaminate the funded rules.

Target length: 110 seconds.

### Finding Real Examples

Look for a rounded push up, a shallow pullback or sideways handle, then a possible continuation attempt. The cup should look like a bowl or rounded base. The handle should be smaller than the cup and should not be a giant sell-off. Film 2-3 candidates if possible, but pick the clearest one.

### Narration Script

1. This shape is called a cup and handle.
2. The cup is the rounded part.
3. The handle is the smaller pullback.
4. Online, traders often treat it as a continuation pattern.
5. In our course, it is only chart vocabulary.
6. It can help us describe what price is doing.
7. It does not create a trade.
8. If the shape appears near our Asian box, we still run the same checklist.
9. Clean box.
10. Daily bias.
11. EMA stack.
12. H1 breakout close in session.
13. No lockout.
14. If those are not present, there is no trade.
15. This is chart language, not a signal. Our only tradeable signal is the checklist: clean box + daily bias + EMA stack + H1 breakout close in session + no lockout.

### Shot List

1. Show wider chart with cup shape. Narration lines 1-3.
2. Mark cup and handle visually with cursor only, no new drawn trading levels. Narration lines 2-4.
3. Zoom out to show Asian box and marker. Narration lines 5-8.
4. Show checklist/state table. Narration lines 9-14.
5. End on full chart and say required disclaimer. Narration line 15.

### Caption Cues

- Cup and handle is vocabulary.
- Cup is rounded.
- Handle is smaller pullback.
- YouTube may trade it.
- We do not.
- It can describe context.
- Checklist still decides.
- No checklist, no trade.

### Recap Card

- Cup and handle is a visual phrase.
- It is context only in this system.
- The frozen checklist remains the only signal.

Quiz: If cup and handle appears but there is no valid H1 breakout close, what happens?

Answer: no trade.

## Lesson 8 - Flags On A Real Chart: Vocabulary, Not A Signal

Learning goal: recognise bull and bear flags while keeping them journal context only.

Target length: 110 seconds.

### Finding Real Examples

Find a strong push, then a small sloping or sideways consolidation. For a bull flag, the push is up and the pause drifts sideways or down. For a bear flag, the push is down and the pause drifts sideways or up. The flag should be smaller than the original push.

### Narration Script

1. This shape is called a flag.
2. First there is a strong push.
3. Then price pauses in a smaller channel.
4. A bull flag comes after a push up.
5. A bear flag comes after a push down.
6. This is useful language.
7. It helps us journal what we see.
8. But it is not an entry rule.
9. We do not buy because a bull flag appears.
10. We do not sell because a bear flag appears.
11. If a flag appears near the Asian box, the checklist still decides.
12. Clean box.
13. Daily bias.
14. EMA stack.
15. H1 breakout close in session.
16. No lockout.
17. This is chart language, not a signal. Our only tradeable signal is the checklist: clean box + daily bias + EMA stack + H1 breakout close in session + no lockout.

### Shot List

1. Show bull flag candidate. Narration lines 1-5.
2. Show bear flag candidate if available. Narration lines 1-5.
3. Show the same area with marker and Asian box. Narration lines 6-11.
4. Zoom to state table/checklist. Narration lines 12-16.
5. End on full chart and say required disclaimer. Narration line 17.

### Caption Cues

- A flag has a push.
- Then a smaller pause.
- Bull flag after push up.
- Bear flag after push down.
- Useful for journalling.
- Not an entry rule.
- Checklist still decides.

### Recap Card

- Flags describe price structure.
- In this course, flags are context only.
- Never trade the flag instead of the checklist.

Quiz: Does a bear flag give a funded short entry?

Answer: no. Only the checklist can.

## Lesson 9 - The Journal Rep

Learning goal: record a decision so it becomes evidence, not just a memory.

Target length: 100 seconds.

### Narration Script

1. A trade is not finished when the chart moves.
2. It is finished when the journal is complete.
3. Start with the setup tag.
4. Record the marker state.
5. Record the Action row.
6. Record range quality.
7. Record daily bias and EMA stack.
8. Record the news check.
9. If it was a trade, record entry, stop zone, TP zone, and time exit.
10. If it was a skip, record why.
11. Then record emotion.
12. Were you calm, rushed, tired, or tempted?
13. Finally, write one lesson.
14. One clean journal entry beats ten vague memories.

### Shot List

1. Show a real chart decision, trade or skip. Narration lines 1-2.
2. Open course journal fields. Narration lines 3-8.
3. Fill trade fields or skip reason. Narration lines 9-10.
4. Fill emotion/state field. Narration lines 11-12.
5. Fill lesson learned. Narration lines 13-14.

### Caption Cues

- Finish with the journal.
- Setup tag.
- Marker state.
- Action row.
- Range quality.
- Bias and EMA.
- News check.
- Emotion and lesson.

### Recap Card

- Journal both trades and skips.
- Record Action row and zone prices.
- Emotion matters because breaches usually start there.

Quiz: Does a clean skip count as a rep?

Answer: yes.

## Lesson 10 - A Losing Trade, Handled Like A Pro

Learning goal: accept a valid -1R without revenge, re-entry, or rule drift.

Target length: 110 seconds.

### Finding Real Examples

Find a real historical valid signal where the checklist passed, the marker drew `BREAKOUT CLOSE`, `EXEC @ price`, STOP/TP zones, and price later hit the red STOP zone before target. Use a clean loser, not a messy day that should have been skipped.

### Narration Script

1. This is a losing trade.
2. That does not make it a bad trade.
3. First, check whether the entry followed the rules.
4. Clean box.
5. Daily bias.
6. EMA stack.
7. H1 breakout close.
8. No lockout.
9. If those passed, the loss is just part of the model.
10. The red zone did its job.
11. It limited the loss to minus 1R.
12. Now the key behaviour is after the stop.
13. No revenge trade.
14. No instant re-entry.
15. No changing rules on the spot.
16. Journal the result.
17. Write the lesson.
18. Then stop trading for the day if the risk rule says stop.

### Shot List

1. Show the original valid setup. Narration lines 1-9.
2. Zoom to STOP zone and price hitting it. Narration lines 10-11.
3. Show Action row or one-trade-per-day rule if visible. Narration lines 12-15.
4. Open journal and record -1R. Narration lines 16-18.

### Caption Cues

- This is a losing trade.
- Loss does not mean bad.
- Check the rules first.
- If rules passed, accept it.
- Red zone did its job.
- No revenge trade.
- No instant re-entry.
- Journal the lesson.

### Recap Card

- A valid -1R is acceptable.
- The stop protects the account.
- Professional behaviour after loss is the lesson.

Quiz: After a valid stopped trade, can we re-enter because price looks tempting?

Answer: no. One trade per day.

