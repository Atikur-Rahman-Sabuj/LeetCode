/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
let dp = new Array(multipliers.length+1).fill(0);
        
    let dp_left_1 = 0;
    for (let i = multipliers.length - 1; i >= 0; i--) {        
        for (let left = i; left >= 0; left--) {            
            let temp = dp[left];
            dp[left] = Math.max(
                multipliers[i] * nums[left] + dp_left_1,
                multipliers[i] * nums[(nums.length - 1) -  (i - left)] + dp[left]
            );            
            dp_left_1 = temp;                 
        }   
        dp_left_1 = dp[i];                   
    }
    return dp[0];
};