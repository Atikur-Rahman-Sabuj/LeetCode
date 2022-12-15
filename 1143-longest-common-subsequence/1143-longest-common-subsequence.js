/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = new Array(m+1);
    dp[0] = new Array(n+1).fill(0);
    for(let i = 0 ; i < m ; i++){
        dp[i+1] = new Array(n+1).fill(0);
        for(let j = 0 ; j < n ; j++){
            dp[i+1][j+1] = text1[i] === text2[j] ? 1+dp[i][j] : Math.max(dp[i][j+1], dp[i+1][j]);
        }
    }
    return Math.max(...dp[m]);
};