/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let ans = 0, pre = 0
    for(const num of nums){
        if(num === 0){
            pre++
        }else{
            pre = 0;
        }
        ans += pre
    }
    return ans;
};