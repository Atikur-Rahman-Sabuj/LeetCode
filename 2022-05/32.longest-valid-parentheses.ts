/*
 * @lc app=leetcode id=32 lang=typescript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
function longestValidParentheses(s: string): number {
   let maxLength: number = 0;
   let dp: number[] = new Array(s.length).fill(0);

   for (let i = 1; i < s.length; i++) {
      if (s[i - 1] === "(" && s[i] === ")") {
         // - condition a.
         dp[i] = 2 + (dp[i - 2] || 0); // - dp[i-2] can return undefined,            if so we will add zero instead
         maxLength = Math.max(maxLength, dp[i]);
      }
      if (
         s[i - 1] === ")" &&
         s[i] === ")" &&
         s[i - dp[i - 1] - 1] === "(" // - condition b.
      ) {
         dp[i] = 2 + dp[i - 1] + (dp[i - dp[i - 1] - 2] || 0);
         maxLength = Math.max(maxLength, dp[i]);
      }
   }
   return maxLength;
}
// @lc code=end
