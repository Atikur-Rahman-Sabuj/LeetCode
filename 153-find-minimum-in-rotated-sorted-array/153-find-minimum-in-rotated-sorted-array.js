/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0, high = nums.length - 1, mid = 0;
    while(low < high){
        mid = Math.floor((low+high)/2);
        if(nums[mid-1] > nums[mid]) return nums[mid];
        if(nums[mid] > nums[high]){
            low = mid+1;
        }else{
            high = mid;
        }
    }
    return nums[low];
};