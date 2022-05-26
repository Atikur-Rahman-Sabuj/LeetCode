/*
 * @lc app=leetcode id=918 lang=typescript
 *
 * [918] Maximum Sum Circular Subarray
 */

// @lc code=start
function maxSubarraySumCircular(nums: number[]): number {
   let result = nums[0],
      sum = nums[0],
      minSum = nums[0],
      minResult = nums[0],
      allSum = 0,
      minNum = nums[0];
   for (let index = 1; index < nums.length; index++) {
      sum = Math.max(sum + nums[index], nums[index]);
      result = Math.max(result, sum);

      minSum = Math.min(minSum + nums[index], nums[index]);
      minResult = Math.min(minResult, minSum);

      allSum += nums[index];

      minNum = Math.min(minNum, nums[index]);
   }
   if (minSum === allSum) {
      minSum -= minNum;
   }
   return Math.max(result, allSum - minSum);
}
// @lc code=end
