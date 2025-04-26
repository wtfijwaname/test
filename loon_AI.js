[Plugin]
http-response ^https?:\/\/chatclient\.soul-mates\.ai\/user\/info\/detail script-path=https://raw.githubusercontent.com/wtfijwaname/test/main/loon_AI.js,requires-body=true

[MITM]
hostname = chatclient.soul-mates.ai

// loon_AI.js 修改版 (带提醒功能)
// let url = $request.url;
// let body = $response.body;
// if (url.includes("/user/info/detail")) {
//   console.log("✅ 已捕获用户信息接口请求"); // 添加提醒
//   try {
//     let obj = JSON.parse(body);
//     if (obj?.data?.diamondBalance !== undefined) {
//       console.log(`🔧 原钻石值: ${obj.data.diamondBalance}`); // 修改前提醒
//       obj.data.diamondBalance = 999;
//       obj.data.totalBalance = 999;
//       console.log("✨ 已修改钻石值为 999"); // 修改后提醒
//     }
//     body = JSON.stringify(obj);
//   } catch (e) {
//     console.log("❌ 处理失败: " + e);
//   }
// }
// $done({ body });

// loon_AI.js 最小测试版
let url = $request.url;
let body = $response.body;

if (url.includes("/user/info/detail")) {
  console.log("✅ 基础匹配成功");
}

$done({ body });
