/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0, high = nums.length;
    while(low < high){
        const mid = Math.floor((low+high)/2)
        if(nums[mid] === target) return mid
        if(target < nums[mid]){
            high = mid
        }else{
            low = mid+1
        }
    }
    return low;
};