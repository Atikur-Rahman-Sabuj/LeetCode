/*
 * @lc app=leetcode id=740 lang=typescript
 *
 * [740] Delete and Earn
 */

// @lc code=start
function deleteAndEarn(nums: number[]): number {
   if (nums.length === 1) {
      return nums[0];
   }
   let dp: number[] = new Array(1001).fill(0);
   for (let index = 0; index < nums.length; index++) {
      dp[nums[index]] += nums[index];
   }
   for (let index = 2; index < dp.length; index++) {
      dp[index] = Math.max(dp[index - 2] + dp[index], dp[index - 1]);
   }
   return dp[dp.length - 1];
}
// @lc code=end
