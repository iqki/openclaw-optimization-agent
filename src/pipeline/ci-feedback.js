export function summarizeCiFeedback({ checks }) {
  const failed = checks.filter((item) => item.status !== 'passed').length;
  return {
    total: checks.length,
    failed,
    status: failed > 0 ? 'needs_fix' : 'ok'
  };
}
