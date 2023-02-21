/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let low = 0, high = nums.length - 1;
    while(low < high){
        let mid = Math.floor((low+high)/2)
        //console.log(mid)
        if((nums[mid] !== nums[mid+1]) && (nums[mid-1] !== nums[mid])){
            return nums[mid];
        }
        if(nums[mid-1] === nums[mid]){
            mid = mid - 1;
        }
        //console.log(mid)
        if(mid & 1){
            high = mid;
        }else{
            low = mid+2;
        }
    }
    return nums[low]
};