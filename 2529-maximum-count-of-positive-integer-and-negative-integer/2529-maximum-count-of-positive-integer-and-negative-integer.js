/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    const n = nums.length;
    let neg = 0; zeroes = 0;
    for(let i = 0 ; i< n ; i++){
        if(nums[i]<0)neg++;
        else if(nums[i] === 0) zeroes++;
        else break;
    }
    const pos = n - zeroes - neg;
    return Math.max(neg, pos);
};