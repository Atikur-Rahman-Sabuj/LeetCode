/*
 * @lc app=leetcode id=96 lang=typescript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
function numTrees(n: number): number {
   const dp: number[] = [1, 1];
   for (let i = 2; i <= n; i++) {
      let sum = 0;
      for (let j = 1; j <= i; j++) {
         sum += dp[j - 1] * dp[i - j];
      }
      dp[i] = sum;
   }
   return dp[n];
}
// @lc code=end
