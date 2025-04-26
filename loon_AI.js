
[Plugin]
# 钻石999修改器
http-response ^https?:\/\/chatclient\.soul-mates\.ai\/user\/info\/detail script-path=https://raw.githubusercontent.com/wtfijwaname/test/refs/heads/main/loon_AI.js requires-body=true,tag=钻石修改,enable=true

[MITM]
hostname = chatclient.soul-mates.ai



// 适用于 Loon 的钻石修改脚本 (diamond-modifier.js)
let url = $request.url;
let body = $response.body;

if (url.includes("/user/info/detail")) {
  try {
    let obj = JSON.parse(body);
    
    // 精准匹配接口路径
    if (obj?.data?.diamondBalance !== undefined) {
      obj.data.diamondBalance = 999;
      obj.data.totalBalance = 999;  // 保持总余额同步
    }
    
    body = JSON.stringify(obj);
  } catch (e) {
    console.log("JSON 处理失败，接口：/user/info/detail | 错误：" + e);
  }
}

$done({ body });
