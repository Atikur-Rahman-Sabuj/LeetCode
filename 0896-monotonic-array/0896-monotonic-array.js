/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if (nums.length === 1) return true;
    let isIncreasing = true, isDecreasing = true;
    for(let i = 1 ; i < nums.length ; i++){
        isIncreasing = isIncreasing && nums[i] >= nums[i-1]
        isDecreasing = isDecreasing && nums[i] <= nums[i-1]
    }
    return isIncreasing || isDecreasing
};