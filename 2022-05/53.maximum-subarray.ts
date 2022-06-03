/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
   let result = nums[0],
      sum = nums[0];
   for (let index = 1; index < nums.length; index++) {
      sum = Math.max(sum + nums[index], nums[index]);
      result = Math.max(result, sum);
   }
   return result;
}
// @lc code=end
