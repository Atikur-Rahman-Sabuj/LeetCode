/*
 * @lc app=leetcode id=2163 lang=typescript
 *
 * [2163] Minimum Difference in Sums After Removal of Elements
 */

// @lc code=start
function minimumDifference(nums: number[]): number {
   nums.sort((a, b) => a - b);
   let sum1 = 0,
      sum2 = 0;
   for (let i = 0; i < nums.length / 3; i++) {
      sum1 += nums[i];
      sum2 += nums[nums.length - 1 - i];
   }
}
// @lc code=end
