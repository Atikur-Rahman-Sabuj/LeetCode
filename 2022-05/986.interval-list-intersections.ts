/*
 * @lc app=leetcode id=986 lang=typescript
 *
 * [986] Interval List Intersections
 */

// @lc code=start
function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
   let i = 0;
   let j = 0;
   const result: number[][] = [];
   while (i < firstList.length && j < secondList.length) {
      const [firstStart, firstEnd] = firstList[i];
      const [secondStart, secondEnd] = secondList[j];
      const start = Math.max(firstStart, secondStart);
      const end = Math.min(firstEnd, secondEnd);
      if (start <= end) {
         result.push([start, end]);
      }
      if (firstEnd < secondEnd) {
         i++;
      } else {
         j++;
      }
   }
   return result;
}
// @lc code=end
