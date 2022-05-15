/*
 * @lc app=leetcode id=2054 lang=typescript
 *
 * [2054] Two Best Non-Overlapping Events
 */

// @lc code=start
function maxTwoEvents(events: number[][]): number {
   events.sort((a, b) => a[1] - b[1]);
   let max = 0;
   let end = 0;
   for (let i = 0; i < events.length; i++) {
      if (events[i][0] >= end) {
         max = Math.max(max, events[i][1]);
         end = events[i][1];
      }
   }
   return max;
}
// @lc code=end
