/*
 * @lc app=leetcode id=516 lang=typescript
 *
 * [516] Longest Palindromic Subsequence
 */

// @lc code=start
function longestPalindromeSubseq(s: string): number {
   var dp = [];
   for (var i = 0; i < s.length; i++) {
      dp[i] = Array(s.length).fill(0);
   }
   for (var i = s.length - 1; i >= 0; i--) {
      for (var j = i; j < s.length; j++) {
         if (s[i] === s[j]) {
            if (j - i <= 1) {
               dp[i][j] = j - i + 1;
            } else {
               dp[i][j] = dp[i + 1][j - 1] + 2;
            }
         } else {
            dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
         }
      }
   }
   return dp[0][s.length - 1];
}
// @lc code=end
