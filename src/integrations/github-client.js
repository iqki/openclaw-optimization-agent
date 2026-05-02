export function createPullRequestDraft({ title, summary, baseBranch = 'main' }) {
  return {
    provider: 'github',
    baseBranch,
    title,
    summary,
    status: 'draft'
  };
}
