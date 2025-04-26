[rewrite_local]
^https?:\/\/chatclient\.soul-mates\.ai\/user\/info\/detail url script-response-body https://raw.githubusercontent.com/wtfijwaname/test/main/loon_AI.js
[mitm]
hostname = chatclient.soul-mates.ai
const url = $request.url;
let body = $response.body;

if (url.includes("/user/info/detail")) {
    console.log("📡 请求捕获 | URL: " + url);
    
    try {
        const obj = JSON.parse(body);
        
        if (obj?.data?.diamondBalance !== undefined) {
            console.log("🔧 原始数据 | 钻石: " + obj.data.diamondBalance);
            
            // 数据修改
            obj.data.diamondBalance = 999;
            obj.data.totalBalance = 999;
            
            // 调试输出
            console.log("✨ 修改结果 | 钻石值已设置为 999");
            console.log("🔄 响应体长度: " + JSON.stringify(obj).length + " 字节");
        }
        
        body = JSON.stringify(obj);
    } catch (e) {
        console.log("❌ 解析异常 | 错误详情: " + e.stack);
        $notify("脚本错误", "JSON解析失败", e.message); // 推送通知提醒
    }
}

$done({ body });
