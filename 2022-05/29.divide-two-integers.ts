/*
 * @lc app=leetcode id=29 lang=typescript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
function divide(dividend: number, divisor: number): number {
   function getBitShift(dividend, divisor) {
      let res = 0;

      while (dividend >= divisor) {
         res += 1;
         // Handle JavaScript bitwise operator 32-bit integer
         if (divisor >= Math.pow(2, 30)) {
            break;
         }
         divisor = divisor << 1;
      }
      return res - 1;
   }
   if (dividend === 0) {
      return 0;
   }
   if (dividend === -2147483648 && divisor === -1) {
      return 2147483647;
   }
   if (divisor === 1) return dividend;
   if (dividend === divisor) return 1;
   let sign = 1;
   if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
      sign = -1;
   }

   let res = 0;
   let absDividend = Math.abs(dividend);
   let absDivisor = Math.abs(divisor);
   while (absDividend >= absDivisor) {
      let shift = getBitShift(absDividend, absDivisor);

      res += 1 << shift;
      absDividend -= absDivisor << shift;
      //console.log(absDividend, absDivisor, shift);
   }
   if (sign === -1) return -res;
   return res;
}
// @lc code=end
