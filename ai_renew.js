[rewrite_local]
^https?:\/\/chatclient\.soul-mates\.ai\/user\/info\/detail url  script-response-body https://raw.githubusercontent.com/wtfijwaname/test/main/ai_renew.js
[mitm]
hostname = chatclient.soul-mates.ai

const url = $request.url;
let body = $response.body;

if (url.includes("/user/info/detail")) {
    $notify("捕捉通知"，“匹配成功”，“地址”+ url);