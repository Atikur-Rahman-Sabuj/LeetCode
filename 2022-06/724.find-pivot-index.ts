/*
 * @lc app=leetcode id=724 lang=typescript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
   let sum = nums.reduce((a, b) => a + b, 0);
   let leftSum = 0;
   let rightSum = sum - nums[0];
   if (leftSum === rightSum) return 0;
   for (let i = 1; i < nums.length; i++) {
      leftSum += nums[i - 1];
      rightSum -= nums[i];
      if (leftSum === rightSum) return i;
   }
   return -1;
}
// @lc code=end
