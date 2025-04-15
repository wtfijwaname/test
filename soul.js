// 适用于QuantumultX的响应体修改脚本
const url = “https:\/\/chatclient.soul-mates.ai/user/info/detail”;
if (url.includes('user/info/detail')) {
    try {
        let body = JSON.parse($response.body);
        // 修改金币和总余额
        body.data.goldBalance = 9999;      // 金币数值修改
        body.data.totalBalance = 9999;     // 总余额数值修改
        $done({ body: JSON.stringify(body) });
    } catch (e) {
        console.log(`脚本执行错误：${e}`);
        $done({});
    }
} else {
    $done({});
}
