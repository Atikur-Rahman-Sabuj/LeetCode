/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
   let result = 0;
   let sign = 1;
   let i = 0;
   while (i < s.length && s[i] === " ") {
      i++;
   }
   if (i < s.length && (s[i] === "+" || s[i] === "-")) {
      if (s[i] === "-") {
         sign = -1;
      }
      i++;
   }
   while (i < s.length && s[i] >= "0" && s[i] <= "9") {
      result = result * 10 + s[i].charCodeAt(0) - "0".charCodeAt(0);
      i++;
   }
   result = result * sign;
   if (result > 2147483647) {
      return 2147483647;
   }
   if (result < -2147483648) {
      return -2147483648;
   }
   return result;
}
// @lc code=end
