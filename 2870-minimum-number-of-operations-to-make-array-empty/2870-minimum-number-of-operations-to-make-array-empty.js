/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const freq = new Map();
    for(const num of nums){
        freq.set(num, (freq.get(num) ?? 0) + 1)
    }
    let ans = 0;
    for (const [num, f] of freq.entries()) {
        if(f == 1) return -1;
        ans += Math.ceil(f/3)
    }
    return ans;
};