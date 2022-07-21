/*
 * @lc app=leetcode id=1642 lang=typescript
 *
 * [1642] Furthest Building You Can Reach
 */

// @lc code=start
function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
   let distances: number[] = [];
   let dIndex = 0;
   for (let i = 1; i < heights.length; i++) {
      const d = heights[i] - heights[i - 1];
      if (d >= 0) {
         distances[dIndex] = d;
         dIndex++;
      }
      //console.log(distances, dIndex)
      if (ladders < dIndex) {
         let minIndex = 0;
         for (let j = 1; j < distances.length; j++) {
            minIndex = distances[j] < distances[minIndex] ? j : minIndex;
         }
         bricks -= distances[minIndex];
         distances.splice(minIndex, 1);
         dIndex--;
      }
      //console.log(distances)
      if (bricks < 0) {
         return i - 1;
      }
   }
   return heights.length - 1;
}
// @lc code=end
