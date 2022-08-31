/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = nums[0],
    sum = nums[0];
    for (let index = 1; index < nums.length; index++) {
        sum = Math.max(sum + nums[index], nums[index]);
        result = Math.max(result, sum);
    }
    return result;
};