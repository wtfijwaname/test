// 适用于QuantumultX的响应体修改脚本
[rewrite_local]
^https:\/\/chatclient\.soul-mates\.ai\/user\/info\/detail url script-response-body https://raw.githubusercontent.com/wtfijwaname/test/main/soul.js

[mitm]
hostname = chatclient.soul-mates.ai

// 适用于QuantumultX的响应体修改脚本
const url = $request.url;
if (url.includes('/user/info/detail')) {
    try {
        let body = JSON.parse($response.body);
        if (body.data)   {
    // "createRoleCount" : 0,
    // "status" : 1,
    // "lastOriginateTime" : ,
    // "channelCode" : 102,
    // "likeRoleCount" : 0,
    // "nickname" : "只想白嫖",
    // "updateTime" : ,
    // "sex" : "1",
    // "realName" : "telegram_username",
    // "regClientType" : 2,
    // "membershipDue" : 0,
    // "regIp" : "",
    // "isFirstLogin" : false,
    // "regDevice" : "telegram_device",
    // "publishRoleCount" : 0,
     "id" : 491916299,
    // "email" : null,
    // "parentId" : 0,
    // "memberType" : 0,
    // "lastLoginTime" : ,
    // "collectRoleCount" : 1,
    // "avatar" : "",
    // "createTime" : ,
    // "thirdId" : null,
    "goldBalance" : 999,
    "totalBalance" : 999,
    // "botShareUrl" : "https://t.me",
    "diamondBalance" : 999
  }
            
        
        $done({ body: JSON.stringify(body) });
    } catch (e) {
        console.log(`解析响应体出错: ${e.message}`);
        $done({});
    }
} else {
    $done({});
}
/*

{
  "pageSize" : null,
  "current" : null,
  "data" : {
    "createRoleCount" : 0,
    "status" : 1,
    "lastOriginateTime" : 1744640491233,
    "channelCode" : 102,
    "likeRoleCount" : 0,
    "nickname" : "只想白嫖",
    "updateTime" : 1744640491233,
    "sex" : "1",
    "realName" : "telegram_username",
    "regClientType" : 2,
    "membershipDue" : 0,
    "regIp" : "",
    "isFirstLogin" : false,
    "regDevice" : "telegram_device",
    "publishRoleCount" : 0,
    "id" : 491916291,
    "email" : null,
    "parentId" : 0,
    "memberType" : 0,
    "lastLoginTime" : 1744790599570,
    "collectRoleCount" : 1,
    "avatar" : "",
    "createTime" : 1744640491233,
    "thirdId" : null,
    "goldBalance" : 0,
    "totalBalance" : 4,
    "botShareUrl" : "https://t.me/x_chat_ai002_bot/soulAi",
    "diamondBalance" : 4
  },
  "code" : 1,
  "msg" : null,
  "totalData" : null,
  "total" : null
}
*/
// const url = $request.url;
// console.log(`当前请求的 URL: ${url}`);
// if (url.includes('/user/info/detail')) {
//     try {
//         console.log('开始处理响应体');
//         console.log(`原始响应体字符串: ${$response.body}`);
//         // 尝试解析响应体为 JSON
//         let body = JSON.parse($response.body);
//         console.log('响应体解析成功');

//         // 检查响应体结构是否符合预期
//         if (body && body.data && typeof body.data.goldBalance!== 'undefined' && typeof body.data.totalBalance!== 'undefined' && typeof body.data.diamondBalance!== 'undefined') {
//             // 调试日志（输出所有原始值）
//             console.log(`原始值 | 金币:${body.data.goldBalance} 总余额:${body.data.totalBalance} 钻石:${body.data.diamondBalance}`);

//             // 数值修改（统一为 999.00）
//             body.data.goldBalance = 999.00;
//             body.data.totalBalance = 999.00;
//             body.data.diamondBalance = 999.00;

//             // 严格校验（全字段检查）
//             const isSuccess = [body.data.goldBalance, body.data.totalBalance, body.data.diamondBalance]
//                .every(v => v === 9999);

//             // 发送通知
//             $notify(
//                 isSuccess ? "修改成功 ✅" : "部分失败 ⚠️",
//                 `金币:${body.data.goldBalance}`,
//                 `总余额:${body.data.totalBalance} | 钻石:${body.data.diamondBalance}`
//             );

//             // 返回修改后的响应体
//             $done({ body: JSON.stringify(body) });
//         } else {
//             console.log('响应体结构不符合预期');
//             console.log(`实际响应体结构: ${JSON.stringify(body)}`);
//             $notify("结构错误 ⚠️", "响应体结构不符合预期", "请检查日志");
//             $done({});
//         }
//     } catch (e) {
//         console.log(`原始响应：${$response.body}\n错误详情：${e.message}`);
//         $notify("脚本崩溃 ⛔️", "请检查日志", e.message);  // 添加异常通知
//         $done({});
//     }
// } else {
//     console.log('URL 不匹配，跳过处理');
//     $done({});
// }


