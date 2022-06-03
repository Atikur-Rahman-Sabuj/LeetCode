/*
 * @lc app=leetcode id=10 lang=typescript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
   const dp: boolean[][] = [];
   for (let i = 0; i <= s.length; i++) {
      dp[i] = [];
      for (let j = 0; j <= p.length; j++) {
         if (i === 0 && j === 0) {
            dp[i][j] = true;
         } else if (j === 0) {
            dp[i][j] = false;
         } else if (p[j - 1] === "*") {
            dp[i][j] = dp[i][j - 2];
         } else if (i > 0 && (p[j - 1] === "." || p[j - 1] === s[i - 1])) {
            dp[i][j] = dp[i - 1][j - 1];
         } else {
            dp[i][j] = false;
         }
      }
   }
   return dp[s.length][p.length];
}
// @lc code=end
