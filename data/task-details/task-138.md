# task-138: Universal Nav Strip — All Report HTML Templates

## Goal
Every generated HTML report should have a consistent top navigation bar with links to key destinations.

## Nav Links Required
1. 🏠 **Dashboard** → `./index.html`
2. 📅 **This Month** → `./calendars/training_calendar_YYYY_MM.html` (dynamic)
3. 🏋️ **Speediance** → `http://192.168.1.249:8084/speediance_dashboard.html`
4. 🌅 **Morning** → `./morning_report_YYYY-MM-DD.html` (current date)
5. 🌙 **Nightly** → `./nightly_report_YYYY-MM-DD.html` (current date)

## Files to Modify
- Jinja template files in `~/clawd/scriptsJinja/`
- Look for template files used by generate_morning_report_jinja.py and generate_nightly_report_jinja.py

## Nav Bar Style (dark theme, sticky top)
```html
<div style="background:#1a1a1f;padding:10px 20px;display:flex;gap:16px;position:sticky;top:0;z-index:100;border-bottom:1px solid #333;flex-wrap:wrap">
  <a href="./index.html" style="color:#00ff88;text-decoration:none;font-size:13px">🏠 Home</a>
  <a href="./calendars/training_calendar_{YEAR}_{MONTH:02d}.html" style="color:#00ff88;text-decoration:none;font-size:13px">📅 Calendar</a>
  <a href="http://192.168.1.249:8084/speediance_dashboard.html" style="color:#00ff88;text-decoration:none;font-size:13px">🏋️ Speediance</a>
</div>
```

## Success Criteria
- Nav bar appears at top of tomorrow's generated morning and nightly reports
- No existing content broken
