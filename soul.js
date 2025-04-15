// 适用于QuantumultX的响应体修改脚本
[rewrite_local]
^https:\/\/chatclient\.soul-mates\.ai\/user\/info\/detail url script-response-body https://raw.githubusercontent.com/wtfijwaname/test/refs/heads/main/soul.js
[mitm]
hostname = chatclient.soul-mates.ai

// 适用于QuantumultX的响应体修改脚本
const url = $request.url;
if (url.includes('user/info/detail')) {
    try {
        let body = JSON.parse($response.body);
        // 修改金币和总余额
              // 金币数值修改
       bady = {
           "goldBalance" : 9999,
           "totalBalance": 9999,
       }     // 总余额数值修改
        $done({ body: JSON.stringify(body) });
    } catch (e) {
        console.log(`脚本执行错误：${e}`);
        $done({});
    }
} else {
    $done({});
}

