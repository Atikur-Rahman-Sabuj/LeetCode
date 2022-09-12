/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let low = 0, high = nums.length - 1;
     while(low < high)
    {
        let mid1 = Math.floor((low+high)/2);
        let mid2 = mid1+1;
        if(nums[mid1] < nums[mid2])
            low = mid2;
        else
            high = mid1;
    }
    return low;
};