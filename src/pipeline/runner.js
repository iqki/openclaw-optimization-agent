import { buildScenarioPlan } from '../scenarios/scenario-plan.js';
import { collectMockMetrics } from '../metrics/collector.js';
import { buildOptimizationProposal } from '../agents/optimizer-agent.js';
import { renderSummaryReport } from '../reports/summary-report.js';
import fs from 'fs';
import path from 'path';

export async function runPoC() {
  const plan = buildScenarioPlan();
  const metrics = collectMockMetrics(plan);
  const proposal = buildOptimizationProposal(metrics);

  const out = {
    generatedAt: new Date().toISOString(),
    plan,
    metrics,
    proposal
  };

  const reportsDir = path.resolve(process.cwd(), 'reports');
  try {
    fs.mkdirSync(reportsDir, { recursive: true });
  } catch (e) {}

  const outFile = path.join(reportsDir, 'last-run.json');
  fs.writeFileSync(outFile, JSON.stringify(out, null, 2), 'utf8');

  // also print a brief summary to stdout
  renderSummaryReport({ plan, metrics, proposal });
  console.log('PoC report written to', outFile);
}

if (process.argv[1] && process.argv[1].endsWith('runner.js')) {
  runPoC().catch((e) => { console.error(e); process.exit(1); });
}
