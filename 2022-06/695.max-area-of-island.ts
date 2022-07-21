/*
 * @lc app=leetcode id=695 lang=typescript
 *
 * [695] Max Area of Island
 */

// @lc code=start
function maxAreaOfIsland(grid: number[][]): number {
   const findArea = (i: number, j: number): number => {
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return 0;
      if (grid[i][j] === 0) return 0;
      grid[i][j] = 0;
      return 1 + findArea(i + 1, j) + findArea(i - 1, j) + findArea(i, j + 1) + findArea(i, j - 1);
   };
   let max = 0;
   for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
         if (grid[i][j] === 1) {
            max = Math.max(max, findArea(i, j));
         }
      }
   }
   return max;
}
// @lc code=end
