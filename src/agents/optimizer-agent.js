export function buildOptimizationProposal(metrics) {
  const hints = [];

  if (metrics.baseline.peakMemoryMb > 3000) {
    hints.push('Prioritize memory compaction and context truncation strategies.');
  }

  if (metrics.baseline.p95LatencyMs > 5000) {
    hints.push('Introduce async batching and reduce tool-call serialization.');
  }

  return {
    title: 'OpenClaw Mid/Low-end Hardware Optimization Proposal',
    priority: 'high',
    hints
  };
}
