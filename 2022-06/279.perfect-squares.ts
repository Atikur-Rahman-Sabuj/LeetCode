/*
 * @lc app=leetcode id=279 lang=typescript
 *
 * [279] Perfect Squares
 */

// @lc code=start
function numSquares(n: number): number {
   const dp: number[] = [0, 1, 2];
   let sNumber = 1;
   for (let i = 3; i <= n; i++) {
      if (i === (sNumber + 1) * (sNumber + 1)) {
         dp[i] = 1;
         sNumber++;
      } else {
         dp[i] = Number.MAX_SAFE_INTEGER;
         for (let j = 1; j < i; j++) {
            dp[i] = Math.min(dp[i], dp[j] + dp[i - j]);
         }
      }
   }
   return dp[n];
}
// @lc code=end
