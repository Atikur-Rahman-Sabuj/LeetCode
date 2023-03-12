/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function(nums) {
    const m = new Map()
    m.set(0, 1)
    let xor = 0, ans = 0
    for(const num of nums){
        xor ^= num
        let temp = m.get(xor) || 0
        ans += temp
        m.set(xor, temp+1)
    }
    return ans
};