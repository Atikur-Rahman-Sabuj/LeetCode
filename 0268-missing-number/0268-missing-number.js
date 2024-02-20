/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    let length = nums.length;
    for (let i = 0; i < length; i++) {
      sum += nums[i];
    }
    return (length * (length + 1)) / 2 - sum;
};