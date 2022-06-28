/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
function fib(n: number): number {
   if (n === 0) return 0;
   if (n === 1) return 1;
   function findFibo(i: number, prev: number, prevPrev: number): number {
      if (i === n) return prev + prevPrev;
      return findFibo(i + 1, prev + prevPrev, prev);
   }
   return findFibo(2, 0, 1);
}
// @lc code=end
