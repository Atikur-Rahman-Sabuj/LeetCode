/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums.sort((a,b)=>a-b);
    let twice = -1;
    let missing = -1
    for(let i = 1 ; i < nums.length ; i++){
        if(nums[i] === nums[i-1])
            twice = nums[i];
        else if(nums[i] === nums[i-1]+2)
            missing = nums[i] - 1;
    }
    if(missing === -1){
        if(nums[0] === 2) {
            missing = 1;
        }else{
            missing = nums.length;
        }
    }
    return [twice, missing];
};