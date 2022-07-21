/*
 * @lc app=leetcode id=377 lang=typescript
 *
 * [377] Combination Sum IV
 */

// @lc code=start
function combinationSum4(nums: number[], target: number): number {
   const dp: number[] = new Array(target + 1).fill(0);
   dp[0] = 1;
   for (let i = 1; i <= target; i++) {
      for (let j = 0; j < nums.length; j++) {
         if (i >= nums[j]) {
            dp[i] += dp[i - nums[j]];
         }
      }
   }
   return dp[target];
}
// @lc code=end
