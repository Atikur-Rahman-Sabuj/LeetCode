/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    const n = stones.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
    dp[0][0] = true; 
    for (let i = 1; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            const diff = stones[i] - stones[j];
            if (diff > j + 1) {
                break;
            }
            dp[i][diff] = dp[j][diff - 1] || dp[j][diff] || dp[j][diff + 1];
                if (i === n - 1 && dp[i][diff]) {
                    return true;
                }
        }
    }
    return false;
};