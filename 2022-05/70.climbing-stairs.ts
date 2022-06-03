/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
   const dp = [1, 2];
   for (let i = 2; i < n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
   }
   return dp[n - 1];
}
// @lc code=end
