/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
    const dp =[true, false, nums[0] === nums[1], false];
    for(let i = 2 ;i <nums.length ; i++){
        let two = nums[i] === nums[i-1];
        let three = (two && nums[i] === nums[i-2]) || (nums[i]-1===nums[i-1] && nums[i]-2 === nums[i-2]);
        dp[(i+1)%4] = (two && dp[(i-1)%4]) || (three && dp[(i-2)%4]);
    }
    return dp[nums.length%4];
};