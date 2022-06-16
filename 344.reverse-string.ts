/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
   let temp = "";
   const length = s.length;
   const half = Math.floor(s.length / 2);
   for (let i = 0; i < half; i++) {
      temp = s[i];
      s[i] = s[length - i - 1];
      s[length - i - 1] = temp;
   }
}
// @lc code=end
