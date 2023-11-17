/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b) => a-b);
    const n = nums.length;
    let ans  = 0;
    for(let i = 0 ; i < n/2 ; i++){
        ans = Math.max(ans, nums[i]+ nums[n-1-i]);
    }
    return ans;
};