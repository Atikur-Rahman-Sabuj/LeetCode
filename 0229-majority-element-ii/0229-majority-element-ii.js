/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const limit = nums.length / 3;
    const s = new Set();
    const m = new Map();
    for(const num of nums){
        let count  = (m.get(num) || 0) + 1;
        if(count > limit){
            s.add(num);
        }
        m.set(num, count);
    }
    return Array.from(s);
};