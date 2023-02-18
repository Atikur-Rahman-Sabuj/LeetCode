/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function(nums) {
    nums.sort((a,b) => a - b);
    let i = 0, j = nums.length - 1;
    let ii = 2, jj = j, temp = nums[2] - nums[0];
    if(temp < nums[j] - nums[j-2]){
        ii = 0;
        jj = j-2;
        temp = nums[j] - nums[j-2]
    }
    if(temp < (nums[1] - nums[0]) + (nums[j] - nums[j-1])){
        ii = 1;
        jj = j-1;
    }
    return nums[jj] - nums[ii]
    
    
};