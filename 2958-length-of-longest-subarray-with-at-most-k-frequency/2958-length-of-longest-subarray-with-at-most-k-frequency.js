/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    const m = new Map();
    let j = 0, ans = 0;
    for(let i = 0 ; i < nums.length ; i++){
        let freq = m.get(nums[i]) ?? 0;
        if(freq == k){
            while(nums[j] != nums[i]){
                m.set(nums[j], m.get(nums[j]) - 1);
                j++;
            }
            j++;
        }else{
            m.set(nums[i], freq + 1);
            ans = Math.max(ans, i - j + 1);
        }
    }
    
    return ans;
};