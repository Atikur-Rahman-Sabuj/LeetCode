/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
   const range = 2147483648;
   let ifPositive = x > 0;
   if (!ifPositive) {
      x = Math.abs(x);
   }
   let reversed = 0;
   while (x !== 0) {
      reversed = reversed * 10 + (x % 10);
      x = Math.floor(x / 10);
   }
   if (!ifPositive) {
      reversed = -reversed;
   }
   if (reversed > range || reversed < -range) {
      return 0;
   }
   return reversed;
}
// @lc code=end
