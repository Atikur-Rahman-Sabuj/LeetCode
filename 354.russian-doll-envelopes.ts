/*
 * @lc app=leetcode id=354 lang=typescript
 *
 * [354] Russian Doll Envelopes
 */

// @lc code=start
function maxEnvelopes(envelopes: number[][]): number {
    const arr2 = [...envelopes];
   envelopes.sort((a, b) => {
      if (a[0] === b[0]) return b[1] - a[1];
      return a[0] - b[0];
   });
   arr2.
   let result = 1;
   let li = envelopes[0];
   for (let i = 1; i < envelopes.length; i++) {
      if (envelopes[i][0] > li[0] && envelopes[i][1] > li[1]) {
         result++;
         li = envelopes[i];
      }
   }
   return result;
}
// @lc code=end
