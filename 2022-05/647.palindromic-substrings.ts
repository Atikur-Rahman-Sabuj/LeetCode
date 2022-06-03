/*
 * @lc app=leetcode id=647 lang=typescript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
function countSubstrings(s: string): number {
   const isPalindrome = (s: string) => {
      let left = 0,
         right = s.length - 1;
      while (left < right) {
         if (s[left] !== s[right]) {
            return false;
         }
         left++;
         right--;
      }
      return true;
   };
   let count = 0;
   for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
         if (isPalindrome(s.slice(i, j + 1))) {
            count++;
         }
      }
   }
   return count;
}
// @lc code=end
