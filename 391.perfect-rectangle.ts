/*
 * @lc app=leetcode id=391 lang=typescript
 *
 * [391] Perfect Rectangle
 */

// @lc code=start
function isRectangleCover(rectangles: number[][]): boolean {
   let xmin = Number.MAX_SAFE_INTEGER;
   let ymin = Number.MAX_SAFE_INTEGER;
   let xmax = Number.MIN_SAFE_INTEGER;
   let ymax = Number.MIN_SAFE_INTEGER;
   let totalArea = 0;
   let pointSet = new Set();
   for (const [x1, y1, x2, y2] of rectangles) {
      totalArea += (x2 - x1) * (y2 - y1);
      xmin = Math.min(xmin, x1);
      ymin = Math.min(ymin, y1);
      xmax = Math.max(xmax, x2);
      ymax = Math.max(ymax, y2);

      if (pointSet.has(`${x1}-${y1}`)) {
         pointSet.delete(`${x1}-${y1}`);
      } else {
         pointSet.add(`${x1}-${y1}`);
      }

      if (pointSet.has(`${x2}-${y1}`)) {
         pointSet.delete(`${x2}-${y1}`);
      } else {
         pointSet.add(`${x2}-${y1}`);
      }

      if (pointSet.has(`${x1}-${y2}`)) {
         pointSet.delete(`${x1}-${y2}`);
      } else {
         pointSet.add(`${x1}-${y2}`);
      }

      if (pointSet.has(`${x2}-${y2}`)) {
         pointSet.delete(`${x2}-${y2}`);
      } else {
         pointSet.add(`${x2}-${y2}`);
      }
   }

   if (
      pointSet.has(`${xmin}-${ymin}`) &&
      pointSet.has(`${xmax}-${ymin}`) &&
      pointSet.has(`${xmin}-${ymax}`) &&
      pointSet.has(`${xmax}-${ymax}`) &&
      pointSet.size === 4
   ) {
      return totalArea === (xmax - xmin) * (ymax - ymin);
   }
   return false;
}
// @lc code=end
