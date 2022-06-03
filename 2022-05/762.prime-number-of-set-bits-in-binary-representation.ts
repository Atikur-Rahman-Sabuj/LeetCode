/*
 * @lc app=leetcode id=762 lang=typescript
 *
 * [762] Prime Number of Set Bits in Binary Representation
 */

// @lc code=start
function countPrimeSetBits(left: number, right: number): number {
   const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];
   let count = 0;
   for (let i = left; i <= right; i++) {
      let bits = 0;
      let n = i;
      while (n) {
         console.log("Before: " + n);
         bits += n & 1;
         n >>= 1;
         console.log("After: " + n);
      }
      if (primes.includes(bits)) {
         count++;
      }
   }
   return count;
}
// @lc code=end
