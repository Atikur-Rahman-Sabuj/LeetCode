/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const dp = new Array(nums.length).fill(1000000);
    dp[0] = 0;
    for(let i = 0 ; i < nums.length ; i++){
       for(let j = 1 ; j <= nums[i] ; j++ ){
           if(dp[i+j] > dp[i]+1){
               dp[i+j] = dp[i]+1;
           }
       }
    }
    return dp[nums.length - 1];
};