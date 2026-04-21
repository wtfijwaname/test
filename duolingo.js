[rewrite_local]
# ======== 多邻国高级版解锁 ========
# 用户订阅等级解锁
^https?:\/\/ios-api\.duolingo\.com\/2017-06-30\/users\/\d+(\?fields=|%3Ffields=)subscriberLevel url script-response-body https://he2o.vercel.app/Resource/Script/Duo/level.js

# 功能解锁（新API模式）
^https?:\/\/ios-api\.duolingo\.com\/2017-06-30\/users\/\d+\/available-features url script-response-body https://he2o.vercel.app/Resource/Script/Duo/features.js

# 批处理请求解锁
^https?:\/\/ios-api\.duolingo\.com\/2017-06-30\/batch url script-response-body https://he2o.vercel.app/Resource/Script/Duo/batch.js

# 旧API兼容（如有）
^https?:\/\/api-prod\.duolingo\.com\/2017-06-30\/(users\/\d+|batch) url script-response-body https://he2o.vercel.app/Resource/Script/Duo/batch.js

# 超级会员解锁
^https?:\/\/ios-api\.duolingo\.com\/2017-06-30\/users\/\d+\?fields=isSuperuser url script-response-body https://raw.githubusercontent.com/chavyleung/scripts/master/icon/other/duolingo/duolingo-super.js

[mitm]
# 多邻国主域名
hostname = ios-api.duolingo.com, api-prod.duolingo.com, *.duolingo.com
