# 架构设计

## 1. 流程总览
1. Scenario Generator 生成真实任务集
2. Runner 执行任务并记录链路
3. Metrics Collector 汇总资源与性能数据
4. Analyzer 识别瓶颈并输出优化建议
5. PR Agent 生成变更并提交 PR
6. CI Verifier 回收结果并形成闭环报告

## 2. 关键设计原则
- 真实场景优先：覆盖长上下文、多轮、工具调用、记忆、多 Agent 协作
- 中低端设备优先：关注资源受限条件下的稳定性与吞吐
- 可复现：固定场景模板与环境配置版本
- 长周期观测：按日聚合、按周复盘

## 3. 数据模型（草案）
- run_id: 单次执行唯一标识
- scenario_id: 场景编号
- hardware_profile: 设备分层
- latency_ms: 端到端时延
- cpu_peak_pct: CPU 峰值
- memory_peak_mb: 内存峰值
- token_used: Token 消耗
- success_rate: 成功率
- suggested_patch_count: 建议补丁数
