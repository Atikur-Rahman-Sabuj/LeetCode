/*
 * @lc app=leetcode id=1137 lang=typescript
 *
 * [1137] N-th Tribonacci Number
 */

// @lc code=start

function tribonacci(n: number): number {
   const dp = [0, 1, 1];
   let i = 3;
   while (i <= n) {
      dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
      i++;
   }
   return dp[n];
}

// @lc code=end
