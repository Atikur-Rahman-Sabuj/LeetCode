/*
 * @lc app=leetcode id=583 lang=typescript
 *
 * [583] Delete Operation for Two Strings
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
   const dp: number[][] = [];
   dp[0] = new Array(word2.length + 1).fill(0);
   for (let i = 0; i <= word1.length; i++) {
      {
         dp[i + 1] = [];
         dp[i + 1][0] = 0;
         for (let j = 0; j < word2.length; j++) {
            if (word1[i] === word2[j]) {
               dp[i + 1][j + 1] = dp[i][j] + 1;
            } else {
               dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
         }
      }
   }
   return word1.length + word2.length - 2 * dp[word1.length][word2.length];
}
// @lc code=end
