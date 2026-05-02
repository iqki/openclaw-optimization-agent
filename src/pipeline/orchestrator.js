import { buildScenarioPlan } from '../scenarios/scenario-plan.js';
import { collectMockMetrics } from '../metrics/collector.js';
import { buildOptimizationProposal } from '../agents/optimizer-agent.js';
import { renderSummaryReport } from '../reports/summary-report.js';

export async function runProjectPipeline({ mode }) {
  const plan = buildScenarioPlan();
  const metrics = collectMockMetrics(plan);
  const proposal = buildOptimizationProposal(metrics);

  if (mode === 'report') {
    renderSummaryReport({ plan, metrics, proposal });
    return;
  }

  console.log('Pipeline plan generated.');
  console.log('- scenarios:', plan.totalScenarios);
  console.log('- target hardware profiles:', plan.hardwareProfiles.join(', '));
  console.log('- daily token budget:', plan.dailyTokenBudget);
}
