/*
 * @lc app=leetcode id=409 lang=typescript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
function longestPalindrome(s: string): number {
   const alp: number[] = Array(60).fill(0);
   for (const char of s) {
      alp[char.charCodeAt(0) - "A".charCodeAt(0)]++;
   }
   let hasOdd = false;
   let total = 0;
   for (const num of alp) {
      if (num & 1) {
         hasOdd = true;
         total += num - 1;
      } else {
         total += num;
      }
   }
   return hasOdd ? total + 1 : total;
}
// @lc code=end
