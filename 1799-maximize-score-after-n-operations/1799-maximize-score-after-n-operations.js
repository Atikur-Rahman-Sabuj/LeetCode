/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    let n = nums.length / 2, m = nums.length;
    let memo = Array(1 << m).fill(-1);
    return dp(1, 0);

    function dp(i, mask) {
    if (i === n + 1) return 0;
    if (memo[mask] !== -1) return memo[mask];

    let ans = 0;
    for (let j = 0; j < m; j++) {
      if ((mask >> j) & 1) continue; // j has already been used
      for (let k = j + 1; k < m; k++) {
        if ((mask >> k) & 1) continue; // k has already been used
        let score = i * gcd(nums[j], nums[k]);
        let newMask = mask | (1 << j) | (1 << k);
        ans = Math.max(ans, dp(i + 1, newMask) + score);
      }
    }
    return memo[mask] = ans;
    }

    function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
    }
};