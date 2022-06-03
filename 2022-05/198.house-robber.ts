/*
 * @lc app=leetcode id=198 lang=typescript
 *
 * [198] House Robber
 */

// @lc code=start
function rob(nums: number[]): number {
   if (nums.length === 1) {
      return nums[0];
   }
   let dp: number[] = [nums[0], nums[1]];
   for (let index = 2; index < nums.length; index++) {
      let max = Number.MIN_SAFE_INTEGER;
      for (let j = 0; j < index - 1; j++) {
         max = Math.max(max, dp[j] + nums[index]);
      }
      dp[index] = max;
   }
   return Math.max(dp[nums.length - 1], dp[nums.length - 2]);
}
// @lc code=end
