/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
    let dp = new Array(d+1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(d*f + 1).fill(0);
    }
    
    let exp = 1e9 + 7;
    
    if (target > d*f)
        return 0;
    
    for (let i = 1; i <= f; i++)
        dp[1][i] = 1;

    for (let i = 2; i <= d;i++) {
        for (let j = i; j <= i*f; j++) {
            for (let k = 1; k <= f;k++) {
                if (k >= j)
                    break;
                dp[i][j] += dp[i-1][j-k];    
            }
            dp[i][j] = dp[i][j]%exp;
        }
    }
    
    return dp[d][target];
};