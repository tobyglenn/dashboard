# task-143: Deploy Speediance Dashboard to GitHub Pages

## Goal
Make the Speediance dashboard accessible remotely via GitHub Pages.

## Steps
1. Copy: `cp ~/clawd/data/speediance_dashboard.html ~/clawd/docs/speediance_dashboard.html`
2. Copy: `cp ~/clawd/data/speediance_exercise_history.json ~/clawd/docs/speediance_exercise_history.json`
3. Update index.html to add link under Strength section
4. Run: `bash ~/.openclaw/workspace/scripts/wrappers/deploy_github.sh`
5. Confirm URL: `https://tobyglenn.github.io/fitness/speediance_dashboard.html`

## Note
The exercise history JSON must be in the same directory as the dashboard HTML for the fetch() call to work.

## Success Criteria
- Files deployed to gh-pages branch
- GitHub Pages URL accessible
- Exercise history loads in the dashboard modals
