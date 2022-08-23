/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = nums[0];
    let majorityCount = 1;
    for(let i = 1 ; i < nums.length ; i++){
        if(majority !== nums[i]) {
            if(majorityCount > 0){
                majorityCount --;
            }else{
                majority = nums[i];
                majorityCount++;
            }
        }else{
            majorityCount++;
        }
    }
    return majority;
};