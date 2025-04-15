// 
[Script]
http-response ^https:\/\/chatclient\.soul-mates\.ai\/user\/info\/detail script-path=https://raw.githubusercontent.com/你的用户名/仓库名/main/soul_balance_loon.js require-body=true timeout=10

[MITM]
hostname = chatclient.soul-mates.ai
于Loon的响应体修改脚本
if (typeof $response !== "undefined") {
    const url = $request.url;
    if (url.indexOf('/user/info/detail') !== -1) {
        try {
            let body = JSON.parse($response.body);
            
            // 调试日志
            console.log(`[LOON] 原始金币：${body.data.goldBalance}`);
            console.log(`[LOON] 原始总余额：${body.data.totalBalance}`);
            console.log(`[LOON] 原始钻石：${body.data.diamondBalance}`);
            
            // 数值修改
            body.data.goldBalance = 9999;    // 网页[2]数值类型校验
            body.data.totalBalance = 9999;
            body.data.diamondBalance = 9999;
            
            // 验证修改结果
            const isSuccess = (body.data.goldBalance === 9999 && 
                              body.data.totalBalance === 9999 &&
                              body.data.diamondBalance === 9999);
                              
            $notification.post(
                isSuccess ? "Soul修改成功 ✅" : "修改异常 ⚠️",
                `金币:${body.data.goldBalance} | 总余额:${body.data.totalBalance}`,
                isSuccess ? "所有数值已设为9999" : "检测到字段赋值错误"
            );
            
            $done({ body: JSON.stringify(body) });
        } catch (e) {
            console.log(`[LOON] JSON解析错误：${e}`);
            $done({});
        }
    } else {
        $done({});
    }
} else {
    $done({});
}
