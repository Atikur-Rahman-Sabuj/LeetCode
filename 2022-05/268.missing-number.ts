/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
   let sum = 0;
   let length = nums.length;
   for (let i = 0; i < length; i++) {
      sum += nums[i];
   }
   return (length * (length + 1)) / 2 - sum;
}
// @lc code=end
