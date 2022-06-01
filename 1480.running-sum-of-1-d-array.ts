/*
 * @lc app=leetcode id=1480 lang=typescript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
function runningSum(nums: number[]): number[] {
   const result: number[] = [];
   let sum = 0;
   for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      result.push(sum);
   }
   return result;
}
// @lc code=end
