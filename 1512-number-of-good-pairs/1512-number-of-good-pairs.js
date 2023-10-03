/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const m = new Map();
    let ans = 0;
    for(const num of nums){
        const preC = m.get(num) || 0;
        ans += preC;
        m.set(num, preC + 1);
    }
    return ans;
};