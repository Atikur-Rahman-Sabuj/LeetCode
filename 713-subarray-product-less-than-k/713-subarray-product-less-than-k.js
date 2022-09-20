/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let ans = 0, s = 0, l = 1 , t;
    for(let i = 0 ; i < nums.length ; i++){
        l = nums[i];
        t =  i;
        while(l < k && t >= s){
            ans++;
            t--;
            l = l*nums[t];
        }
        s = t + 1;
    }
    return ans;
    
};