/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let r = 0, b = nums.length - 1;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] === 0 && i !== r){
            swap(i, r);
            r++;
            i--;
        }
        if(nums[i] === 2 && i !== b){
            swap(i, b);
            b--;
            i--;
        }
        if(i >= b) break;
        //console.log(nums)
    }
    
    function swap(i1, i2){
        let t = nums[i1];
        nums[i1] = nums[i2];
        nums[i2] = t;
    }
    return nums;
};