/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let n = nums.length;
    nums[n] = n+1;
    let ans = [];
    for(let i = 0 ; i < n ; i++){
        if(nums[Math.abs(nums[i])] < 0){
            ans.push(Math.abs(nums[i]));
        }
        nums[Math.abs(nums[i])] = -1 * nums[Math.abs(nums[i])];
    }
    return ans;
};