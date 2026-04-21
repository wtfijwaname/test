[rewrite_local]
# 调试规则1：捕获所有duolingo请求并显示
^https?:\/\/.*\.duolingo\.com url script-response-body https://raw.githubusercontent.com/chavyleung/scripts/master/box/rewrite/response-body.js
^https?:\/\/.*\.duolingo\.net url script-response-body https://raw.githubusercontent.com/chavyleung/scripts/master/box/rewrite/response-body.js
^https?:\/\/.*\.duolingo\.org url script-response-body https://raw.githubusercontent.com/chavyleung/scripts/master/box/rewrite/response-body.js

[mitm]
hostname = *.duolingo.com, *.duolingo.net, *.duolingo.org
