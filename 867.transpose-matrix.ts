/*
 * @lc app=leetcode id=867 lang=typescript
 *
 * [867] Transpose Matrix
 */

// @lc code=start
function transpose(matrix: number[][]): number[][] {
   const result: number[][] = [];
   for (let i = 0; i < matrix[0].length; i++) {
      result.push([]);
   }
   for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
         result[j][i] = matrix[i][j];
      }
   }
   return result;
}
// @lc code=end
