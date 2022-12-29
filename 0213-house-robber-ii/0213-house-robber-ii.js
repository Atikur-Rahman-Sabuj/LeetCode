/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) {
      return nums[0];
    }
    const dp1 = [0, nums[0]];
    const dp2 = [0, 0];
    for (let i = 2; i <= nums.length; i++) {
      if (i === nums.length) {
         dp2[i] = Math.max(dp2[i - 2] + nums[i - 1], dp2[i - 1]);
      } else {
         dp2[i] = Math.max(dp2[i - 2] + nums[i - 1], dp2[i - 1]);
         dp1[i] = Math.max(dp1[i - 2] + nums[i - 1], dp1[i - 1]);
      }
    }
    return Math.max(dp1[nums.length - 1], dp2[nums.length]);
};