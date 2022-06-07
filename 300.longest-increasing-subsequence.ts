/*
 * @lc app=leetcode id=300 lang=typescript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
   let dp = [];
   for (let i = 0; i < nums.length; i++) {
      dp[i] = 1;
   }
   for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
         if (nums[i] > nums[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
         }
      }
   }
   return Math.max(...dp);
}
// @lc code=end
