[rewrite_local]
^https?:\/\/ios-api\.duolingo\.com\/2017-06-30\/users\/\d+\?.*fields=subscriberLevel url script-response-body https://raw.githubusercontent.com/chavyleung/scripts/master/duolingo/duolingo.js
^https?:\/\/ios-api\.duolingo\.com\/2017-06-30\/users\/\d+\/available-features url script-response-body https://raw.githubusercontent.com/chavyleung/scripts/master/duolingo/duolingo.js
^https?:\/\/ios-api\.duolingo\.com\/2017-06-30\/batch url script-response-body https://raw.githubusercontent.com/chavyleung/scripts/master/duolingo/duolingo.js

[mitm]
hostname = ios-api.duolingo.com
