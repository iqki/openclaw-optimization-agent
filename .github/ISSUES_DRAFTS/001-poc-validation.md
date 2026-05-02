Title: PoC validation and sample data review

Description:
Review the generated PoC data (`reports/last-run.json`) and confirm the schema and fields meet expected reporting needs.

Validation checklist:
- [ ] Schema fields present: run_id, scenario_count, avgLatencyMs, p95LatencyMs, avgMemoryMb, peakMemoryMb, successRate, token_used
- [ ] README quick-start reproduces the run
- [ ] Add example visualization or table snapshot to `docs/`

Notes:
- Suggested reviewers: performance team / contributors
- Priority: Medium
