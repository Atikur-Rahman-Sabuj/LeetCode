/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    const n = questions.length
    const dp = new Array(n).fill(0).map((_,i)=>questions[i][0])
    dp[n] = 0;
    for(let i = n-1 ; i >= 0 ; i--){
        dp[i] = Math.max(dp[i] + (dp[i+questions[i][1]+1] || 0), dp[i+1])
    }
    return dp[0];
};