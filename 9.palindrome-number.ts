/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
   if (x < 0) {
      return false;
   }
   let num = x;
   let result = 0;
   while (num > 0) {
      result = result * 10 + (num % 10);
      num = Math.floor(num / 10);
   }
   return result === x;
}
// @lc code=end
