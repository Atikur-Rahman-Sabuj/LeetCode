/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let firstMin = nums[0];
    let secondMin = 0;
    let i = 1;
    for(; i < nums.length ; i++){
        if(nums[i] > firstMin){
            secondMin = nums[i];
            i++;
            break;
        }
        if(nums[i] < firstMin){
            firstMin = nums[i];
        }
    }
    for(; i < nums.length ; i++){
        //console.log(firstMin, secondMin, nums[i])
        if(nums[i] > secondMin){
            return true;
        }
        if(nums[i] > firstMin && nums[i] < secondMin){
            secondMin = nums[i];
        }
        if(nums[i] < firstMin){
            firstMin = nums[i];
        }
    }
    return false;
};