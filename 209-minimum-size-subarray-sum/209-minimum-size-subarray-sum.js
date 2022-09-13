/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0, ans = Number.MAX_SAFE_INTEGER, i = 0, len = 0;
    for(const num of nums){
        sum += num;
        len += 1;
        while(sum >= target){
            ans = Math.min(ans, len)
            sum -= nums[i++];
            len--;
        }
    }
    return ans === Number.MAX_SAFE_INTEGER?0:ans;
};