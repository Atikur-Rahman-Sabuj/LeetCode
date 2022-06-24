/*
 * @lc app=leetcode id=1354 lang=typescript
 *
 * [1354] Construct Target Array With Multiple Sums
 */

// @lc code=start
function isPossible(target: number[]): boolean {
   target.sort((a, b) => b - a);
   let total = target.reduce((a, b) => a + b, 0);
   while (true) {
      let big = target.shift() ?? 0;
      total -= big;
      if (big === 1 || total === 1) {
         return true;
      }
      if (big < total || total === 0 || big % total === 0) {
         return false;
      }
      big = big % total;
      total += big;
      insert(big);
   }
   function insert(num: number) {
      let index = 0;
      while (num < target[index] && index < target.length) {
         index++;
      }
      target.splice(index, 0, num);
   }
}
// @lc code=end
