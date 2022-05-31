/*
 * @lc app=leetcode id=139 lang=typescript
 *
 * [139] Word Break
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
   const dp: boolean[] = new Array(s.length + 1);
   dp[0] = true;
   for (let i = 1; i <= s.length; i++) {
      for (let j = 0; j < i; j++) {
         if (dp[j] && wordDict.includes(s.substring(j, i))) {
            dp[i] = true;
            break;
         }
      }
   }
   return dp[s.length] ? true : false;
}
// @lc code=end
