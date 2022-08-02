/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const len = nums.length;
    let low = 1, high = len - 1;
    while(low<high){
        let mid = Math.floor((low+high)/2);
        let cnt = 0;
        for(let i = 0 ; i < len ; i++){
            if(nums[i] <= mid) cnt++;
        }
        if(cnt>mid){
            high = mid;
        }else{
            low = mid+1;
        }
    }
    return low;
};