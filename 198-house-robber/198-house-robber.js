/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) {
      return nums[0];
   }
   let dp = [nums[0], nums[1], nums[2]+nums[0]];
   for (let index = 3; index < nums.length; index++) {
      //let max = Number.MIN_SAFE_INTEGER;
      // for (let j = 0; j < index - 1; j++) {
      //    max = Math.max(max, dp[j] + nums[index], dp[j] + nums[index]);
      // }
      let max = Math.max(dp[index-2] + nums[index], dp[index-3] + nums[index])
      dp[index] = max;
   }
    //console.log(dp)
   return Math.max(dp[nums.length - 1], dp[nums.length - 2]);
};