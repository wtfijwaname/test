// 适用于QuantumultX的响应体修改脚本
[rewrite_local]
^https:\/\/chatclient\.soul-mates\.ai\/user\/info\/detail url script-response-body https://raw.githubusercontent.com/wtfijwaname/test/main/soul.js

[mitm]
hostname = *.soul-mates.ai
const url = $request.url;
console.log(`当前请求的 URL: ${url}`);
if (url.includes('/user/info/detail')) {
    try {
        console.log('开始处理响应体');
        console.log(`原始响应体字符串: ${$response.body}`);
        // 尝试解析响应体为 JSON
        let body = JSON.parse($response.body);
        console.log('响应体解析成功');

        // 输出原始响应体
        console.log(`解析后的原始响应体: ${JSON.stringify(body)}`);

        // 检查响应体结构是否符合预期
        if (body && body.data && typeof body.data.goldBalance!== 'undefined' && typeof body.data.totalBalance!== 'undefined' && typeof body.data.diamondBalance!== 'undefined') {
            // 调试日志（输出所有原始值）
            console.log(`原始值 | 金币:${body.data.goldBalance} 总余额:${body.data.totalBalance} 钻石:${body.data.diamondBalance}`);

            // 数值修改（统一为 9999）
            body.data.goldBalance = 9999;
            body.data.totalBalance = 9999;
            body.data.diamondBalance = 9999;

            // 严格校验（全字段检查）
            const isSuccess = [body.data.goldBalance, body.data.totalBalance, body.data.diamondBalance]
               .every(v => v === 9999);

            // 发送通知
            $notify(
                isSuccess ? "修改成功 ✅" : "部分失败 ⚠️",
                `金币:${body.data.goldBalance}`,
                `总余额:${body.data.totalBalance} | 钻石:${body.data.diamondBalance}`
            );

            // 返回修改后的响应体
            $done({ body: JSON.stringify(body) });
        } else {
            console.log('响应体结构不符合预期');
            console.log(`实际响应体结构: ${JSON.stringify(body)}`);
            $notify("结构错误 ⚠️", "响应体结构不符合预期", "请检查日志");
            $done({});
        }
    } catch (e) {
        console.log(`原始响应：${$response.body}\n错误详情：${e.message}`);
        $notify("脚本崩溃 ⛔️", "请检查日志", e.message);  // 添加异常通知
        $done({});
    }
} else {
    console.log('URL 不匹配，跳过处理');
    $done({});
}


