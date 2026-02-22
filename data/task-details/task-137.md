# task-137: Speediance Dashboard — Fitness Report Integration

## Goal
Add a prominent "Speediance Dashboard" link/button to the morning report, nightly report, and lifting recovery report HTML files so Toby can navigate directly to the exercise history and analytics.

## Files to Modify
- `~/clawd/docs/morning_report_2026-02-18.html` — Lifting section (search for "lifting_recovery_report" link)
- `~/clawd/docs/nightly_report_2026-02-18.html` — Lifting section
- `~/clawd/docs/lifting_recovery_report_2026-02-18.html` — Top of report
- `~/clawd/docs/index.html` — Under Strength section
- **Jinja templates** (so future reports get it automatically):
  - `~/clawd/scriptsJinja/generate_morning_report_jinja.py` OR the template it uses
  - `~/clawd/scriptsJinja/generate_nightly_report_jinja.py` OR the template it uses

## Speediance Dashboard URLs
- **LAN (primary):** `http://192.168.1.226:8084/speediance_dashboard.html`
- **GitHub Pages (after task-143):** `https://tobyglenn.github.io/fitness/speediance_dashboard.html`

## Link Style
Match existing link style from morning report: `<a href="URL" style="color: #00ff88; font-weight: bold; text-decoration: none;">🏋️ View Speediance Dashboard</a>`

## Success Criteria
- Link visible in lifting section of today's morning + nightly report
- Link in index.html under Strength
- Link added to Jinja template so tomorrow's reports include it automatically
- No other content removed or broken
