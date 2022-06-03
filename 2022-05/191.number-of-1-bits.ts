/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
function hammingWeight(n: number): number {
   let total = 0;
   while (n) {
      total += n & 1;
      n >>>= 1;
   }
   return total;
}

// @lc code=end
