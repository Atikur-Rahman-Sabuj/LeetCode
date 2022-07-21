/*
 * @lc app=leetcode id=1332 lang=typescript
 *
 * [1332] Remove Palindromic Subsequences
 */

// @lc code=start
function removePalindromeSub(s: string): number {
   if (s.length === 0) {
      return 0;
   }
   let i = 0;
   let j = s.length - 1;
   while (i < j) {
      if (s[i] !== s[j]) {
         return 2;
      }
      i++;
      j--;
   }
   return 1;
}
// @lc code=end
