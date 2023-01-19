/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    const n = nums.length
    const m = new Array(k).fill(0)
    m[0] = 1
    let sum = 0, ans = 0
    for(let i = 0 ; i < n ; i++){
        sum = (sum + nums[i]) % k;
        if(sum < 0) sum += k
        ans += m[sum];
        m[sum]++;
    }
    return ans;
};