/*
 * @lc app=leetcode id=91 lang=typescript
 *
 * [91] Decode Ways
 */

// @lc code=start
function numDecodings(s: string): number {
   const dp = new Array(s.length + 1).fill(0);
   dp[0] = 1;
   dp[1] = s[0] === "0" ? 0 : 1;
   for (let i = 2; i <= s.length; i++) {
      const one = s[i - 1];
      const two = s[i - 2] + s[i - 1];
      if (one >= "1" && one <= "9") {
         dp[i] = dp[i - 1];
      }
      if (two >= "10" && two <= "26") {
         dp[i] += dp[i - 2];
      }
   }
   console.log(dp);

   return dp[s.length];
   //Accepted
}
// @lc code=end
