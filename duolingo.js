[rewrite_local]
# 多邻国 𝕏 - 对 多邻国 深度学习探索
# 作者: j4gm4g [https://j4gm4g.github.io]
# 修改为 QX 兼容版本

# 订购等级 - 优化正则，避免过于宽松
^https?:\/\/(ios-api-\w+|api-\w+|api)\.duolingo\.(com|net|org)\/.*\/users\/.*\?fields=subscriberLevel(&|$) url script-response-body https://he2o.vercel.app/Resource/Script/Duo/level.js

# 订购配置 - 精确匹配路径
^https?:\/\/(ios-api-\w+|api-\w+|api)\.duolingo\.(com|net|org)\/.*\/users\/[^\/]+\/available-features(\?.*)?$ url script-response-body https://he2o.vercel.app/Resource/Script/Duo/features.js

# 订购信息 - 日期格式更精确
^https?:\/\/(ios-api-\w+|api-\w+|api)\.duolingo\.(com|net|org)\/\d{4}-\d{2}-\d{2}\/batch(\?.*)?$ url script-response-body https://he2o.vercel.app/Resource/Script/Duo/batch.js

# 调试用：查看是否命中 (启用时取消注释)
# ^https?:\/\/.*\.duolingo\.com url script-echo-response "Duolingo_HIT_%URL%"

[mitm]
# 精确主机名，避免泛域名
hostname = ios-api-*.duolingo.com, ios-api-*.duolingo.net, api-*.duolingo.com, api.duolingo.com

# 可选：添加图标规则
# [rewrite_local] 中可添加以下图标替换（需有相应图片URL）
# ^https?:\/\/.*\.duolingo\.com\/.*\/users\/.*$ url response-header avatar response-header "你的图片URL"

# 可选：去广告规则示例
# ^https?:\/\/.*\.duolingo\.com\/.*\/ads url reject-200
# ^https?:\/\/.*\.duolingo\.com\/.*\/tracking url reject-200

