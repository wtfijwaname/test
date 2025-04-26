[rewrite_local]
^https?:\/\/chatclient\.soul-mates\.ai\/user\/info\/detail url  script-response-body https://raw.githubusercontent.com/wtfijwaname/test/refs/heads/main/ai_renew.js
[mitm]
hostname = chatclient.soul-mates.ai

const url = $request.url;
let body = $response.body;

if (url.includes("/user/info/detail")) {
    console.log("📡 请求捕获 | URL: " + url);