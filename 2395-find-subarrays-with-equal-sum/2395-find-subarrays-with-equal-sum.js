/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    const n = nums.length;
    const sums = new Map();
    for(let i = 0 ; i < n-1 ; i++){
        if(sums.has(nums[i] + nums[i+1])){
            return true;
        }
        else sums.set(nums[i] + nums[i+1], 1);
    }
    return false;
};