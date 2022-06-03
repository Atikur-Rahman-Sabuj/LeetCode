/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
function fib(n: number): number {
   const dp = [0, 1];
   let i = 2;
   while (i <= n) {
      dp[i] = dp[i - 1] + dp[i - 2];
      i++;
   }
   return dp[n];
}
// @lc code=end
