import { runProjectPipeline } from './pipeline/orchestrator.js';

function printBanner() {
  console.log('OpenClaw Optimization Agent Project');
  console.log('Project initialization stage.');
}

async function main() {
  printBanner();
  const mode = process.argv.includes('--report') ? 'report' : 'plan';
  await runProjectPipeline({ mode });
}

main().catch((error) => {
  console.error('Project pipeline failed:', error.message);
  process.exitCode = 1;
});
