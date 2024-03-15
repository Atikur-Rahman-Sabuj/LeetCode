/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const ans = [1];
    for(let i = 1; i < n ; i++){
        ans[i] = ans[i-1] * nums[i-1];
    }
    let right = 1;
    for(let i = n-1 ; i >= 0 ; i--){
        ans[i] = ans[i] * right;
        right = right * nums[i];
    }
    return ans;
};