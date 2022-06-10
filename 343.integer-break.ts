/*
 * @lc app=leetcode id=343 lang=typescript
 *
 * [343] Integer Break
 */

// @lc code=start
function integerBreak(n: number): number {
   const dp: number[] = [0, 1, 1];
   for (let i = 2; i <= n; i++) {
      let max = 0;
      for (let j = 1; j < i - 1; j++) {
         max = Math.max(max, Math.max(dp[j], j) * Math.max(dp[i - j], i - j));
      }
      dp[i] = max;
   }
   return dp[n];
}
// @lc code=end
