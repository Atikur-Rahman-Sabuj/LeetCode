/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
function canJump(nums: number[]): boolean {
   if (nums.length === 1) {
      return true;
   }
   const dp = [nums[0]];
   if (dp[0] === 0) {
      return false;
   }
   for (let i = 1; i < nums.length - 1; i++) {
      dp[i] = Math.max(dp[i - 1] - 1, nums[i]);
      if (dp[i] === 0) {
         return false;
      }
   }
   return dp[nums.length - 2] >= 0;
}
// @lc code=end
