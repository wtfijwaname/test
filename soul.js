// 适用于QuantumultX的响应体修改脚本
[rewrite_local]
^https:\/\/chatclient\.soul-mates\.ai\/user\/info\/detail url script-response-body https://raw.githubusercontent.com/wtfijwaname/test/refs/heads/main/soul.js
[mitm]
hostname = chatclient.soul-mates.ai

// 适用于QuantumultX的响应体修改脚本
// 升级版脚本（添加类型校验和调试输出）
const url = $request.url;
if (url.includes('/user/info/detail')) {
    try {
        let body = JSON.parse($response.body);
        // 调试输出
        console.log(`原始值 | 金币:${body.data.goldBalance} 总余额:${body.data.totalBalance} 钻石:${body.data.diamondBalance}`);
        
        // 数值修改
        body.data.goldBalance = 999;
        body.data.totalBalance = 999;
        body.data.diamondBalance = 999;
        
        // 严格校验
        const isSuccess = [body.data.goldBalance, body.data.totalBalance, body.data.diamondBalance]
                          .every(v => v === 999);
        $notify(
            isSuccess ? "修改成功 ✅" : "部分失败 ⚠️",
            `金币:${body.data.goldBalance}`,
            `总余额:${body.data.totalBalance} | 钻石:${body.data.diamondBalance}`
        );
        
        $done({ body: JSON.stringify(body) });
    } catch (e) {
        console.log(`原始响应：${$response.body}\n错误详情：${e}`);
        $done({});
    }
} else {
    $done({});
}



