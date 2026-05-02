export function buildScenarioPlan() {
  return {
    totalScenarios: 1200,
    scenarioTypes: [
      'long_context_dialogue',
      'multi_step_tool_use',
      'memory_retrieval',
      'multi_agent_coordination'
    ],
    hardwareProfiles: ['entry_laptop', 'mid_pc', 'low_mid_server'],
    dailyTokenBudget: 50000000,
    runWindowDays: 30
  };
}
