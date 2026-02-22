# task-139: Calendar Nightly Cron — Verify & Fix Path

## Goal
Confirm the calendar generation step in the nightly pipeline works end-to-end.

## Current State
`generate_reports.sh --nightly` runs:
```bash
python3 ~/clawd/scriptsJinja/generate_calendar_jinja.py "$YEAR" "$MONTH"
```

## Steps
1. Find the calendar Jinja script: `ls ~/clawd/scriptsJinja/generate_calendar_jinja.py`
2. Run it manually: `python3 ~/clawd/scriptsJinja/generate_calendar_jinja.py 2026 2`
3. Check where it writes its output
4. Verify index.html has a matching link to that output path
5. If paths don't match, fix either the script or index.html link
6. Confirm the output gets picked up by deploy_github.sh

## Success Criteria
- Calendar script runs without error
- Output file exists at the path index.html links to
- Calendar link in index.html works
