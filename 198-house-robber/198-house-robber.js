/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) {
      return nums[0];
   }
   let dp = [nums[0], nums[1]];
   for (let index = 2; index < nums.length; index++) {
      let max = Number.MIN_SAFE_INTEGER;
      for (let j = 0; j < index - 1; j++) {
         max = Math.max(max, dp[j] + nums[index]);
      }
      dp[index] = max;
   }
   return Math.max(dp[nums.length - 1], dp[nums.length - 2]);
};