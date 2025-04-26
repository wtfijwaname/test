[rewrite_local]
^https?:\/\/(chatclient|api)\.soul-mates\.ai
\/user\/info\/detail url script-response-body https://raw.githubusercontent.com/wtfijwaname/test/main/ai_renew.js

[mitm]
hostname = chatclient.soul-mates.ai
// 触发系统通知
$notify(
  "🔔 目标网址访问提醒", 
  "检测到 soul-mates.ai 请求", 
  "请求时间：" + new Date().toLocaleString() + "\nURL：" + $request.url
);
// 继续传递原始响应（不修改内容）
$done({});
