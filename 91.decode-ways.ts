/*
 * @lc app=leetcode id=91 lang=typescript
 *
 * [91] Decode Ways
 */

// @lc code=start
function numDecodings(s: string): number {
   let result = 0;
   let prevResult = 0;
   if (s.length === 0) return result;
   if (s[0] === "0") return result;
   result = 1;
   prevResult = 1;
   for (let i = 1; i < s.length; i++) {
      if (s[i] === "0") {
         if (s[i - 1] === "1" || s[i - 1] === "2") {
         } else {
            result = 0;
            break;
         }
      } else if (s[i + 1] == "0") {
      } else if (s[i - 1] === "1" || (s[i - 1] === "2" && s[i] <= "6")) {
         result++;
      }
   }
   return result;
   //wrong answer
}
// @lc code=end
