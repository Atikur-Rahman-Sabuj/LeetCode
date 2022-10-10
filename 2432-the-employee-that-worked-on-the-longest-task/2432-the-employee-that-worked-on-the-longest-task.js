/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    let last = 0, ans = 0, max = 0 ;
    for(let i = 0 ; i < logs.length ; i++){
        let time = logs[i][1] - last;
        last = logs[i][1];
        if(time > max){
            max = time;
            ans = logs[i][0];
        }
        else if(time === max){
            ans = Math.min(ans, logs[i][0])
        }
    }
    return ans;
};