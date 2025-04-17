[rewrite_local]
^https://chatclient.soul - mates.ai/chat/daily/task/dailyTaskInfo url 

[mitm]
# 指定需要 MITM 的域名
hostname = chatclient.soul-mates.ai
// 定义响应体
const response = {
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
                "progressValue": 8,
                "taskName": "累计聊天10句",
                "bonusPoints": 20,
                "status": 0
            },
            {
                "userId": 491916291,
                "dateId": 20250418,
                "taskId": 576,
                "targetValue": 30,
                "progressValue": 8,
                "taskName": "累计聊天30句",
                "bonusPoints": 20,
                "status": 0
            },
            {
                "userId": 491916291,
                "dateId": 20250418,
                "taskId": 218,
                "targetValue": 40,
                "progressValue": 8,
                "taskName": "累计聊天40句",
                "bonusPoints": 20,
                "status": 0
            },
            {
                "userId": 491916291,
                "dateId": 20250418,
                "taskId": 802,
                "targetValue": 50,
                "progressValue": 8,
                "taskName": "累计聊天50句",
                "bonusPoints": 30,
                "status": 0
            },
            {
                "userId": 491916291,
                "dateId": 20250418,
                "taskId": 426,
                "targetValue": 2,
                "progressValue": 1,
                "taskName": "与2个不同角色聊天",
                "bonusPoints": 10,
                "status": 0
            },
            {
                "userId": 491916291,
                "dateId": 20250418,
                "taskId": 668,
                "targetValue": 4,
                "progressValue": 1,
                "taskName": "与4个不同角色聊天",
                "bonusPoints": 10,
                "status": 0
            },
            {
                "userId": 491916291,
                "dateId": 20250418,
                "taskId": 613,
                "targetValue": 1,
                "progressValue": 0,
                "taskName": "点赞1个角色",
                "bonusPoints": 15,
                "status": 0
            },
            {
                "userId": 491916291,
                "dateId": 20250418,
                "taskId": 350,
                "targetValue": 3,
                "progressValue": 0,
                "taskName": "点赞3个角色",
                "bonusPoints": 15,
                "status": 0
            },
            {
                "userId": 491916291,
                "dateId": 20250418,
                "taskId": 299,
                "targetValue": 100,
                "progressValue": 96,
                "taskName": "累计消耗100钻石或金币",
                "bonusPoints": 20,
                "status": 0
            },
            {
                "userId": 491916291,
                "dateId": 20250418,
                "taskId": 759,
                "targetValue": 200,
                "progressValue": 96,
                "taskName": "累计消耗200钻石或金币",
                "bonusPoints": 20,
                "status": 0
            },
            {
                "userId": 491916291,
                "dateId": 20250418,
                "taskId": 471,
                "targetValue": 500,
                "progressValue": 96,
                "taskName": "累计消耗500钻石和金币",
                "bonusPoints": 30,
                "status": 0
            },
            {
                "userId": 491916291,
                "dateId": 20250418,
                "taskId": 119,
                "targetValue": 3000,
                "progressValue": 0,
                "taskName": "累计充值3000金币",
                "bonusPoints": 100,
                "status": 0
            },
            {
                "userId": 491916291,
                "dateId": 20250418,
                "taskId": 254,
                "targetValue": 5000,
                "progressValue": 0,
                "taskName": "累计充值5000金币",
                "bonusPoints": 150,
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

// 将每个任务的 progressValue 设置为 targetValue
response.data.dailyTaskList.forEach(task => {
    task.progressValue = task.targetValue;
    task.status = 2; // 任务完成状态
});

// 计算完成任务后的总积分
let totalPoints = 0;
response.data.dailyTaskList.forEach(task => {
    totalPoints += task.bonusPoints;
});
response.data.treasureBoxResp.actualPoints = totalPoints;

// 将宝箱的状态设置为已开启
response.data.treasureBoxResp.treasureBoxList.forEach(box => {
    if (totalPoints >= box.requiredPoints) {
        box.status = 1; // 宝箱已开启
    }
});

// 将修改后的响应体转换为 JSON 字符串
const modifiedResponse = JSON.stringify(response);

// 输出修改后的响应体
console.log(modifiedResponse);

// Quantumult X 需要返回的格式
$done({
    response: {
        body: modifiedResponse
    }
});    
