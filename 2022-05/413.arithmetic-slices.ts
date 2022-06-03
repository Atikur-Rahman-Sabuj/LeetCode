/*
 * @lc app=leetcode id=413 lang=typescript
 *
 * [413] Arithmetic Slices
 */

// @lc code=start
function numberOfArithmeticSlices(nums: number[]): number {
   let result = 0;
   let count = 0;
   for (let i = 2; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
         count++;
      } else {
         result += (count * (count + 1)) / 2;
         count = 0;
      }
   }
   result += (count * (count + 1)) / 2;
   return result;
}
// @lc code=end
