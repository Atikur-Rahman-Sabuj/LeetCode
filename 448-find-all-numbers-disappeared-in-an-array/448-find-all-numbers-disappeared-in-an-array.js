/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[Math.abs(nums[i]) - 1] >= 0){
            nums[Math.abs(nums[i]) - 1] = -1 * nums[Math.abs(nums[i])-1]
        }
    }
    const ans = [];
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] > 0){
            ans.push(i+1)
        }
    }
    return ans;
};