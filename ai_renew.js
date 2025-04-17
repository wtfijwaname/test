[rewrite_local]
// ^https://chatclient.soul-mates.ai/chat/daily/task/dailyTaskInfo url script-response-body https://raw.githubusercontent.com/wtfijwaname/test/refs/heads/main/ai_renew.js
// ^http:\/\/raw\.githubusercontent\.com\/Yu9191\/Rewrite\/refs\/heads\/main\/ydm\.js url re[mitm]
^http:\/\/chatclient\.soul-mates\.ai\/chat\/daily\/task\/dailyTaskInfo url  script-response-body https://raw.githubusercontent.com/wtfijwaname/test/refs/heads/main/ai_renew.js
hostname = chatclient.soul-mates.ai
// 定义响应体
// ==UserScript==
// @name         每日任务响应修改脚本
// @namespace    https://yourdomain.com
// @version      1.0
// @description  修改每日任务响应数据，使所有任务完成，宝箱开启
// @author       Your Name
// @match        https://chatclient.soul-mates.ai/chat/daily/task/dailyTaskInfo
// @grant        none
// ==/UserScript==

// 获取实际响应数据
let response = $response.body;
try {
    // 将响应数据解析为JSON对象
    response = JSON.parse(response);
    // 确保存在data和dailyTaskList
    if (response.data && Array.isArray(response.data.dailyTaskList)) {
        response.data.dailyTaskList.forEach(task => {
            task.progressValue = task.targetValue;
            task.status = 2;
        });
    }
    // 计算总积分
    let totalPoints = 0;
    if (response.data && Array.isArray(response.data.dailyTaskList)) {
        response.data.dailyTaskList.forEach(task => {
            totalPoints += task.bonusPoints;
        });
    }
    // 确保存在data和treasureBoxResp
    if (response.data && response.data.treasureBoxResp) {
        response.data.treasureBoxResp.actualPoints = totalPoints;
        // 确保存在treasureBoxList
        if (Array.isArray(response.data.treasureBoxResp.treasureBoxList)) {
            response.data.treasureBoxResp.treasureBoxList.forEach(box => {
                if (totalPoints >= box.requiredPoints) {
                    box.status = 1;
                }
            });
        }
    }
    // 将修改后的响应转换为字符串
    response = JSON.stringify(response);
} catch (error) {
    // 捕获并处理错误
    console.error('处理响应时出错:', error);
    // 如果发生错误，返回原始响应（可根据需求调整）
    response = $response.body;
}
// 返回修改后的响应
$done({
    response: {
        body: response
    }
});
