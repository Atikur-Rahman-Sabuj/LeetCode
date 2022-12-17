/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    
    //time -> O(n)
    //space -> O(1)
    let len = nums.length;
    for (const num of nums) {
        let idx = Math.abs(num);
        if (nums[idx] < 0) {
            return idx;
        }
        nums[idx] = -nums[idx];
    }
    return len;
    
    
    //time O(nlong)
    //space O(1)
    // const len = nums.length;
    // let low = 1, high = len - 1;
    // while(low<high){
    //     let mid = Math.floor((low+high)/2);
    //     let cnt = 0;
    //     for(let i = 0 ; i < len ; i++){
    //         if(nums[i] <= mid) cnt++;
    //     }
    //     if(cnt>mid){
    //         high = mid;
    //     }else{
    //         low = mid+1;
    //     }
    // }
    // return low;
};