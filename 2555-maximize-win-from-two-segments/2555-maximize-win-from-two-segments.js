/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @return {number}
 */
var maximizeWin = function(A, k) {
    let res = 0, n = A.length, j = 0, dp = new Array(A.length+1).fill(0);
    for (let i = 0; i < n; ++i) {
        while (A[j] < A[i] - k)
            ++j;
        dp[i + 1] = Math.max(dp[i], i - j + 1);
        res = Math.max(res, i - j + 1 + dp[j]);
    }
    return res;

};