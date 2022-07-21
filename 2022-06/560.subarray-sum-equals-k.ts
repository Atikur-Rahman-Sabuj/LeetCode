/*
 * @lc app=leetcode id=560 lang=typescript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
   let sum = 0;
   let temp = 0;
   let ans = 0;
   const map: Map<number, number> = new Map();
   map.set(sum, 1);
   for (const num of nums) {
      sum += num;
      temp = sum - k;
      if (map.has(temp)) {
         ans += map.get(temp);
      }
      map.set(sum, map.get(sum) !== undefined ? map.get(sum) + 1 : 1);
   }
   return ans;
}
// @lc code=end
