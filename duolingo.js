[rewrite_local]
# 多邻国 𝕏 - 对 多邻国 深度学习探索
# 作者: j4gm4g [https://j4gm4g.github.io]

# 订购等级
^https?:\/\/(?:ios-api-[^.]+|api[^.]+)\.duolingo\.[a-z.]+\/.*\/users\/.*\?fields=subscriberLevel url script-response-body https://he2o.vercel.app/Resource/Script/Duo/level.js
# 订购配置
^https?:\/\/(?:ios-api-[^.]+|api[^.]+)\.duolingo\.[a-z.]+\/.*\/users\/.*\/available-features.*$ url script-response-body https://he2o.vercel.app/Resource/Script/Duo/features.js
# 订购信息
^https?:\/\/(?:ios-api-[^.]+|api[^.]+)\.duolingo\.[a-z.]+\/\d{4}-\d{1,2}-\d{1,2}\/batch url script-response-body https://he2o.vercel.app/Resource/Script/Duo/batch.js

# 图标配置（如需显示订阅图标）
# ^https?:\/\/(?:ios-api-[^.]+|api[^.]+)\.duolingo\.[a-z.]+ url reject-img
# 如需图标，可添加以下一行（需修改图片链接）
# ^https?:\/\/api\.duolingo\.com\/.*\/users\/.*$ url response-body "avatar" response-body "你的图片URL"

[mitm]
hostname = ios-api-*.duolingo.*, api*.duolingo.*

# 可选：添加任务（如定时签到）
[task_local]
# 如需定时任务可在此添加
# 0 9 * * * https://raw.githubusercontent.com/your-repo/checkin.js, tag=多邻国签到, enabled=true

