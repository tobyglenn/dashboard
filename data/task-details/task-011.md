# Email Automation Triggers

## Summary
Set up email-based workflow triggers so incoming emails can kick off automated tasks.

## Details
- Monitor a specific inbox/label for trigger emails
- Parse subject line patterns to determine which workflow to run
- Supported triggers: data sync, report generation, dashboard update
- Use macOS Mail rules + AppleScript to detect and forward to OpenClaw

## Acceptance Criteria
- [ ] Email rule created in macOS Mail
- [ ] AppleScript handler parses subject and triggers correct workflow
- [ ] At least 3 trigger patterns working (sync, report, deploy)
- [ ] Error handling: bad/unknown patterns logged, not crashed

## Estimated Effort
Medium — ~2-3 hours
