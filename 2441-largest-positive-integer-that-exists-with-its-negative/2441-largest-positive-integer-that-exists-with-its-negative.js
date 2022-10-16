/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    const m = new Map();
    let max = Number.MIN_SAFE_INTEGER
    for(let i = 0 ; i < nums.length ; i++){
        //console.log(m, nums[i])
        if(m.has(nums[i] * -1)){
            max = Math.max(max, Math.abs(nums[i]));
        }else{
            m.set(nums[i], 1);
        }
    }
    return max === Number.MIN_SAFE_INTEGER?-1:max;
};