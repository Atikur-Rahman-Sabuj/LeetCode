/*
 * @lc app=leetcode id=474 lang=typescript
 *
 * [474] Ones and Zeroes
 */

// @lc code=start
function findMaxForm(strs: string[], m: number, n: number): number {
   const count = (s: string) => {
      let zeros = 0;
      let ones = 0;
      for (let i = 0; i < s.length; i++) {
         if (s[i] === "0") {
            zeros++;
         } else {
            ones++;
         }
      }
      return [zeros, ones];
   };
   let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
   for (let i = 0; i < strs.length; i++) {
      let [zeroes, ones] = count(strs[i]);
      for (let j = m; j >= zeroes; j--) {
         for (let k = n; k >= ones; k--) {
            dp[j][k] = Math.max(dp[j][k], dp[j - zeroes][k - ones] + 1);
         }
      }
   }
   return dp[m][n];
}
// @lc code=end
