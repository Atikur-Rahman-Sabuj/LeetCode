/*
 * @lc app=leetcode id=264 lang=typescript
 *
 * [264] Ugly Number II
 */

// @lc code=start
function nthUglyNumber(n: number): number {
   const dp: number[] = [1];
   let p2 = 0,
      p3 = 0,
      p5 = 0;
   for (let i = 1; i < n; i++) {
      const m2 = dp[p2] * 2,
         m3 = dp[p3] * 3,
         m5 = dp[p5] * 5;
      const min = Math.min(m2, m3, m5);
      if (min === m2) p2++;
      if (min === m3) p3++;
      if (min === m5) p5++;
      dp[i] = min;
   }
   return dp[n - 1];
}
// @lc code=end
