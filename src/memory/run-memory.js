export function buildRunMemoryRecord({ runId, keyFindings }) {
  return {
    runId,
    keyFindings,
    createdAt: new Date().toISOString()
  };
}
