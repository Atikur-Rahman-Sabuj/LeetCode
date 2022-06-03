/*
 * @lc app=leetcode id=152 lang=typescript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
function maxProduct(nums: number[]): number {
   let pastMin = nums[0];
   let pastMax = nums[0];
   let maxProduct = nums[0];
   let tempMin, tempMax;
   for (let i = 1; i < nums.length; i++) {
      tempMin = pastMin;
      tempMax = pastMax;
      pastMin = Math.min(tempMin * nums[i], tempMax * nums[i], nums[i]);
      pastMax = Math.max(tempMin * nums[i], tempMax * nums[i], nums[i]);
      maxProduct = Math.max(maxProduct, pastMin, pastMax);
   }
   return maxProduct;
}
// @lc code=end
