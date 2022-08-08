/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let total = 0;
    
    for(num of nums){
        total += num;
    }
    
    if(total & 1) return false;
    
    const half = Math.floor(total/2);
    let dp = new Array(half+1).fill(false);
    dp[0] = true;

    for(num of nums){
        for(let i = half-1 ; i >= 0 ; i--){
            dp[i+num] = dp[i] || dp[i+num];
        }
    }

    return dp[half];
};