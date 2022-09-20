/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let ans = 0, s = 0, mul = 1 , t;
    for(let i = 0 ; i < nums.length ; i++){
        mul = mul * nums[i];
        while(mul >= k && s <= i){
            mul = mul / nums[s];
            s++;
        }
        ans = ans + i - s + 1;
    }
    return ans;
    
};