/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
   let pastMin = nums[0];
   let pastMax = nums[0];
   let maxProduct = nums[0];
   let tempMin, tempMax;
   for (let i = 1; i < nums.length; i++) {
      tempMin = pastMin;
      tempMax = pastMax;
      pastMin = Math.min(tempMin * nums[i], tempMax * nums[i], nums[i]);
      pastMax = Math.max(tempMin * nums[i], tempMax * nums[i], nums[i]);
      maxProduct = Math.max(maxProduct, pastMax);
   }
   return maxProduct;
};