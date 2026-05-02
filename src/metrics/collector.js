export function collectMockMetrics(plan) {
  return {
    baseline: {
      avgLatencyMs: 2480,
      p95LatencyMs: 6120,
      avgMemoryMb: 1840,
      peakMemoryMb: 3160,
      successRate: 0.91
    },
    metadata: {
      scenarioCount: plan.totalScenarios,
      sampledAt: new Date().toISOString()
    }
  };
}
