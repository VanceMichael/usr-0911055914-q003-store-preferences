# 门店偏好反馈归因

服务将匿名反馈与菜单版本、营业时段及原料变更关联，输出可解释的归因结果。`contracts` 目录包含事件字段样例，应用代码按接入、归因和查询分层。

使用 `docker compose up --build` 启动 API 与 MongoDB；`curl http://localhost:8080/health` 可检查进程状态。
