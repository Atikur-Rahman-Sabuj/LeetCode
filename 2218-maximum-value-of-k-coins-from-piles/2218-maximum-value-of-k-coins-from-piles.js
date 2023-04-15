/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    // Initialize a 2D array dp with dimensions (n+1) x (k+1) to store the maximum value of coins
    // for choosing j coins from the first i piles
    const n = piles.length;
    const dp = Array(n + 1).fill().map(() => Array(k + 1).fill(0));
    
    // Iterate through the rows of dp and compute the maximum value of coins for each subproblem
    for (let i = 1; i <= n; i++) {
        // Iterate through the columns of dp and compute the maximum value of coins for each subproblem
        for (let j = 1; j <= k; j++) {
            let cur = 0;
            // Iterate through the first j coins of the ith pile and compute the maximum value of coins
            // for choosing x coins from the ith pile and (j-x) coins from the first (i-1) piles
            for (let x = 0; x < Math.min(j, piles[i-1].length); x++) {
                cur += piles[i-1][x];
                dp[i][j] = Math.max(dp[i][j], cur + dp[i-1][j-x-1]);
            }
            // Take the maximum value of coins for choosing j coins from the first (i-1) piles
            dp[i][j] = Math.max(dp[i][j], dp[i-1][j]);
        }
    }
    // Return the maximum value of coins for choosing k coins from all the piles
    return dp[n][k];
};