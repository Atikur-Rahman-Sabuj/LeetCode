/*
 * @lc app=leetcode id=1046 lang=typescript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start
function lastStoneWeight(stones: number[]): number {
   stones.sort((a, b) => b - a);
   while (stones.length > 1) {
      if (stones[0] === stones[1]) {
         stones.shift();
         stones.shift();
      } else {
         let val = stones[0] - stones[1];
         stones.shift();
         stones.shift();
         let i = 0;
         for (; i < stones.length; i++) {
            if (stones[i] <= val) break;
         }
         stones.splice(i, 0, val);
      }
   }
   if (stones.length === 0) return 0;
   return stones[0];
}
// @lc code=end
