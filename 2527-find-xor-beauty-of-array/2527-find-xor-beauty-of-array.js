/**
 * @param {number[]} nums
 * @return {number}
 */
var xorBeauty = function(nums) {
    const n = nums.length;
    let ans = 0;
    for(let i = 0 ; i < n ; i++){
        ans ^= nums[i] 
    }
    return ans
};