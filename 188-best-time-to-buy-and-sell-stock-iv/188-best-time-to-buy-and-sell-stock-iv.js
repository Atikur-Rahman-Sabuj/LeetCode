/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const n = prices.length;
    if (k >= Math.floor(n/2)) {
        // fast case because there are [0, n/2] continuous increases
        let maxProfit = 0;
        for (let i = 1; i < n; i++) {
            let diff = prices[i] - prices[i-1];
            if (diff > 0) {
                maxProfit += diff;
            }
        }
        return maxProfit;
    }

    // Each element dp[i][j] means the max profit of at most i transactions until day j
    const dp = new Array(k+1);
    for(let i = 0 ;i < k+1; i++){
        dp[i] = new Array(n).fill(0);
    }
    let localMax = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i <= k; i++) {
        for (let j = 1; j < n; j++) {
            localMax = Math.max(localMax, dp[i-1][j-1] - prices[j-1]);
            dp[i][j] = Math.max(dp[i][j-1], localMax + prices[j]);
        }
        localMax = Number.MIN_SAFE_INTEGER;
    }
    return dp[k][n-1];
};