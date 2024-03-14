/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    const m = new Map();
    let sum = 0, ans = 0;
    m.set(0, 1);
    for(const num of nums){
        sum += num;
        let nGoal = sum - goal;
        let temp = m.get(nGoal) ?? 0;
        ans += temp;
        m.set(sum, (m.get(sum) ?? 0) + 1)
    }
    return ans;
};