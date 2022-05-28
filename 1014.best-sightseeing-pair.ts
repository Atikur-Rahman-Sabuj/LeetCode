/*
 * @lc app=leetcode id=1014 lang=typescript
 *
 * [1014] Best Sightseeing Pair
 */

// @lc code=start
function maxScoreSightseeingPair(values: number[]): number {
   let max = Number.MIN_SAFE_INTEGER;
   let maxIndex = 0;
   for (let i = 1; i < values.length; i++) {
      max = Math.max(max, values[i] + values[maxIndex] + maxIndex - i);
      if (values[i] + i > values[maxIndex] + maxIndex) {
         maxIndex = i;
      }
   }
   return max;
}
// @lc code=end
