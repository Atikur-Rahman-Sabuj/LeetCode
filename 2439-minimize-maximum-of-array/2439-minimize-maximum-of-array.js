/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let sum = 0, ans = 0, av = 0;
    for(let i  = 0 ; i < nums.length ; i++){
        sum = sum + nums[i];
        av = Math.ceil(sum / (i + 1));
        ans = Math.max(ans, av);
    }
    return ans;
};