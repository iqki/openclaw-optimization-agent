export function renderSummaryReport({ plan, metrics, proposal }) {
  console.log('=== Project Summary Report ===');
  console.log('Plan scenarios:', plan.totalScenarios);
  console.log('Token budget/day:', plan.dailyTokenBudget);
  console.log('P95 latency(ms):', metrics.baseline.p95LatencyMs);
  console.log('Peak memory(MB):', metrics.baseline.peakMemoryMb);
  console.log('Proposal:', proposal.title);
  console.log('Hints:', proposal.hints.join(' | '));
}
