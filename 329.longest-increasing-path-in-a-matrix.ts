/*
 * @lc app=leetcode id=329 lang=typescript
 *
 * [329] Longest Increasing Path in a Matrix
 */

// @lc code=start
function longestIncreasingPath(matrix: number[][]): number {
   let height = matrix.length;
   let width = matrix[0].length;
   let value: number[][] = Array(height);
   for (let i = 0; i < height; i++) {
      value[i] = Array(width).fill(-1);
   }
   const dp = (prev: number, i, j) => {
      if (i < 0 || i >= height || j < 0 || j >= width) return 0;
      if (matrix[i][j] <= prev) return 0;
      if (value[i][j] !== -1) return value[i][j];
      let max = 1;
      if (matrix[i][j] > prev) {
         max = Math.max(max, 1 + dp(matrix[i][j], i + 1, j));
         max = Math.max(max, 1 + dp(matrix[i][j], i - 1, j));
         max = Math.max(max, 1 + dp(matrix[i][j], i, j + 1));
         max = Math.max(max, 1 + dp(matrix[i][j], i, j - 1));
      }
      value[i][j] = max;
      return max;
   };
   for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
         dp(-1, i, j);
      }
   }

   let max = 0;
   for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
         max = Math.max(max, value[i][j]);
      }
   }
   return max;
}
// @lc code=end
