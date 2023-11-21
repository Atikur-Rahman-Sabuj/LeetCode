/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    const MODULO = 1e9 + 7;
    const revs = nums.map(num => num - parseInt(num.toString().split("").reverse().join("")))
    const m = new Map();
    let ans = 0;
    for(let i = 0 ; i < revs.length ; i++){
        let c = m.get(revs[i]) || 0;
        ans = (ans + c) % MODULO;
        m.set(revs[i], c+1);
    }
    return ans;
};