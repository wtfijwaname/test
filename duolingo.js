[rewrite_local]
# 基于您提供的真实URL结构
# 您的URL: ^http://ios-api-2.duolingo.cn/...

# 1. 匹配数字变化，域名变化
^https?:\/\/ios-api-\d+\.duolingo\.[a-z]{2,3}\/.+users\/.+\?fields=subscriberLevel url script-response-body https://he2o.vercel.app/Resource/Script/Duo/level.js

# 2. 注意：您提供的是http不是https，所以用https?匹配两种
^https?:\/\/ios-api-\d+\.duolingo\.[a-z]{2,3}\/.+users\/.+\/available-features url script-response-body https://he2o.vercel.app/Resource/Script/Duo/features.js

# 3. 批处理请求
^https?:\/\/ios-api-\d+\.duolingo\.[a-z]{2,3}\/.+\/batch url script-response-body https://he2o.vercel.app/Resource/Script/Duo/batch.js

# 4. 调试用：查看所有匹配的请求
^https?:\/\/ios-api-\d+\.duolingo\.[a-z]{2,3} url script-response-body https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-import-export/sample-response-body.js

[mitm]
# 使用通配符匹配所有可能的域名
hostname = ios-api-*.duolingo.*
