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
        // 调试输出原始值（通过QuantumultX日志查看）
        console.log(`原始goldBalance: ${body.data.goldBalance}`);
        console.log(`原始totalBalance: ${body.data.totalBalance}`);
        console.log(`原始diamondBalance: ${body.data.diamonBalance}`);
        // 强制转换为数值型（避免类型错误）
        body.data.goldBalance = Number(999); 
        body.data.totalBalance = Number(999);
        body.data.diamondBalance = Number(999);
        
        // 验证修改结果
        if (body.data.goldBalance === 999 && body.data.totalBalance === 999 && body.data.diamondBalance === Number(999) ) {
            $notify("修改成功 ✅", "", "数值已更新为9999");
        } else {
            $notify("修改失败 ❌", "", "字段赋值异常");
        }
        $done({ body: JSON.stringify(body) });
    } catch (e) {
        console.log(`脚本错误：${e}`);
        $done({});
    }
} else {
    $done({});
}


