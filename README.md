# OpenClaw Agent Mission Control

A real-time dashboard for monitoring agent activity across the OpenClaw system.

## What This Is

Visual mission control center for tracking:
- **Main Agents**: ARIA 🌸, CLAUD, BOB
- **Subagents**: Pulse ⚡, Spark 💡, Sage 🧠, Vision 👁️, Clarity 🔍

## Architecture

- **Data Collection**: Python script runs every 60s via cron (Pulse model)
- **Data Source**: Session transcripts, SUBAGENTS.md, gateway logs
- **Output**: Single HTML file with embedded CSS/JS
- **Deployment**: GitHub Pages

## How to Update Data

The dashboard auto-refreshes every 30 seconds. Data updates via:
- `scripts/collect_agent_status.py` (cron job, every minute)
- Outputs to `~/clawd/data/agent_status.json`
- Dashboard fetches this JSON file

## Deploy

GitHub Actions automatically deploys on push to main branch. No manual steps needed.

## Local Development

```bash
cd ~/.openclaw/workspace/dashboard
python -m http.server 8080
# Open http://localhost:8080
```

## URL

Live dashboard: `https://tobyglenn.github.io/dashboard`

---
*Last updated: 2026-02-12*