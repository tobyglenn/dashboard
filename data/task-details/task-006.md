# WHOOP Day Strain Bug

## Summary
Fixed: report was summing workout strains instead of using cycle day strain

## Details
- Identified and fixed a bug in generate_nightly_report_content.py
- The report was previously summing workout strains instead of using cycle day strain
- This fix ensures accurate strain calculations for individual cycles
- Improves the accuracy of fitness data analysis and reporting

## Status: Done
## Assignee: ARIA