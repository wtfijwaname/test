[rewrite_local]
// ^https://chatclient.soul-mates.ai/chat/daily/task/dailyTaskInfo url script-response-body https://raw.githubusercontent.com/wtfijwaname/test/refs/heads/main/ai_renew.js
// ^http:\/\/raw\.githubusercontent\.com\/Yu9191\/Rewrite\/refs\/heads\/main\/ydm\.js url re[mitm]
^http:\/\/chatclient\.soul-mates\.ai\/chat\/daily\/task\/dailyTaskInfo url  script-response-body https://raw.githubusercontent.com/wtfijwaname/test/refs/heads/main/ai_renew.js
hostname = chatclient.soul-mates.ai




// 获取实际响应数据
let response = $response.body;
try {
    // 将响应数据解析为JSON对象
    let parsedResponse = JSON.parse(response);

    // 这里可以对parsedResponse进行修改，如果需要的话
    // 例如，如果你想修改某个任务的状态，可以这样做：
    // parsedResponse.data.dailyTaskList.forEach(task => {
    //     if (task.taskId === 311) {
    //         task.status = 1;
    //     }
    // });

    // 假设我们直接使用提供的对象作为修改后的响应
    parsedResponse = {
        "pageSize": null,
        "current": null,
        "data": {
            "dailyTaskList": [
                {
                    "userId": 491916291,
                    "dateId": 20250418,
                    "taskId": 311,
                    "targetValue": 3,
                    "progressValue": 3,
                    "taskName": "累计聊天3句",
                    "bonusPoints": 20,
                    "status": 2
                },
                {
                    "userId": 491916291,
                    "dateId": 20250418,
                    "taskId": 277,
                    "targetValue": 10,
                    "progressValue": 10,
                    "taskName": "累计聊天10句",
                    "bonusPoints": 20,
                    "status": 0
                },
                {
                    "userId": 491916291,
                    "dateId": 20250418,
                    "taskId": 576,
                    "targetValue": 30,
                    "progressValue": 30,
                    "taskName": "累计聊天30句",
                    "bonusPoints": 20,
                    "status": 0
                },
                {
                    "userId": 491916291,
                    "dateId": 20250418,
                    "taskId": 218,
                    "targetValue": 40,
                    "progressValue": 40,
                    "taskName": "累计聊天40句",
                    "bonusPoints": 20,
                    "status": 0
                },
                {
                    "userId": 491916291,
                    "dateId": 20250418,
                    "taskId": 802,
                    "targetValue": 50,
                    "progressValue": 50,
                    "taskName": "累计聊天50句",
                    "bonusPoints": 30,
                    "status": 0
                },
                {
                    "userId": 491916291,
                    "dateId": 20250418,
                    "taskId": 426,
                    "targetValue": 2,
                    "progressValue": 2,
                    "taskName": "与2个不同角色聊天",
                    "bonusPoints": 10,
                    "status": 0
                },
                {
                    "userId": 491916291,
                    "dateId": 20250418,
                    "taskId": 668,
                    "targetValue": 4,
                    "progressValue": 4,
                    "taskName": "与4个不同角色聊天",
                    "bonusPoints": 10,
                    "status": 0
                },
                {
                    "userId": 491916291,
                    "dateId": 20250418,
                    "taskId": 613,
                    "targetValue": 1,
                    "progressValue": 1,
                    "taskName": "点赞1个角色",
                    "bonusPoints": 15,
                    "status": 0
                },
                {
                    "userId": 491916291,
                    "dateId": 20250418,
                    "taskId": 350,
                    "targetValue": 3,
                    "progressValue": 3,
                    "taskName": "点赞3个角色",
                    "bonusPoints": 15,
                    "status": 0
                },
                {
                    "userId": 491916291,
                    "dateId": 20250418,
                    "taskId": 299,
                    "targetValue": 100,
                    "progressValue": 500,
                    "taskName": "累计消耗100钻石或金币",
                    "bonusPoints": 20,
                    "status": 0
                },
                {
                    "userId": 491916291,
                    "dateId": 20250418,
                    "taskId": 759,
                    "targetValue": 200,
                    "progressValue": 500,
                    "taskName": "累计消耗200钻石或金币",
                    "bonusPoints": 20,
                    "status": 0
                },
                {
                    "userId": 491916291,
                    "dateId": 20250418,
                    "taskId": 471,
                    "targetValue": 500,
                    "progressValue": 500,
                    "taskName": "累计消耗500钻石和金币",
                    "bonusPoints": 30,
                    "status": 0
                },
                {
                    "userId": 491916291,
                    "dateId": 20250418,
                    "taskId": 119,
                    "targetValue": 3000,
                    "progressValue": 5000,
                    "taskName": "累计充值3000金币",
                    "bonusPoints": 100,
                    "status": 0
                },
                {
                    "userId": 491916291,
                    "dateId": 20250418,
                    "taskId": 254,
                    "targetValue": 5000,
                    "progressValue": 5000,
                    "taskName": "累计充值5000金币",
                    "bonusPoints": 1500,
                    "status": 0
                }
            ],
            "treasureBoxResp": {
                "actualPoints": 20,
                "treasureBoxList": [
                    {
                        "currencyType": 2,
                        "reward": 50,
                        "order": 1,
                        "status": 0,
                        "requiredPoints": 50
                    },
                    {
                        "currencyType": 2,
                        "reward": 80,
                        "order": 2,
                        "status": 0,
                        "requiredPoints": 100
                    },
                    {
                        "currencyType": 2,
                        "reward": 100,
                        "order": 3,
                        "status": 0,
                        "requiredPoints": 150
                    },
                    {
                        "currencyType": 2,
                        "reward": 150,
                        "order": 4,
                        "status": 0,
                        "requiredPoints": 200
                    }
                ]
            }
        },
        "code": 1,
        "msg": null,
        "totalData": null,
        "total": null
    };

    // 将修改后的响应转换为字符串
    response = JSON.stringify(parsedResponse);
} catch (error) {
    // 捕获并处理错误
    console.error('处理响应时出错:', error);
    // 如果发生错误，返回原始响应（可根据需求调整）
   // response = $response.body;
}
// 返回修改后的响应
$done({ body: response });
