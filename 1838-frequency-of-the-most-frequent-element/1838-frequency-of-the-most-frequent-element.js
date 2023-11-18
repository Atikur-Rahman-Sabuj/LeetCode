/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a,b) => a-b);
    let kk = 0;
    let ans = 1;
    let ti = nums.length - 1;
    for(let i = nums.length - 2 ; i >= 0 ; i--){
        kk += nums[ti] - nums[i];
        while(kk > k){
            let diff = nums[ti] - nums[ti - 1];
            let c = ti - i;
            kk -= c * diff;
            ti--;
        }
        ans = Math.max(ans, ti - i + 1);
    }
    return ans;
};