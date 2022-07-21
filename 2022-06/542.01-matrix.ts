/*
 * @lc app=leetcode id=542 lang=typescript
 *
 * [542] 01 Matrix
 */

// @lc code=start
function updateMatrix(mat: number[][]): number[][] {
   const output: number[][] = Array(mat.length);
   const BIG_NUMBER = 1000000;
   const m = mat.length,
      n = mat[0].length;
   for (let i = 0; i < m; i++) {
      output[i] = Array(n).fill(0);
      for (let j = 0; j < mat[i].length; j++) {
         if (i === 0 || j === 0) {
            output[i][j] = mat[i][j] ? BIG_NUMBER : 0;
         } else {
            output[i][j] = mat[i][j] ? Math.min(output[i - 1][j], output[i][j - 1]) + 1 : 0;
         }
      }
   }
   for (let i = n - 2; i >= 0; i--) {
      output[m - 1][i] = Math.min(output[m - 1][i], output[m - 1][i + 1] + 1);
   }
   for (let i = m - 2; i >= 0; i--) {
      output[i][n - 1] = Math.min(output[i][n - 1], output[i + 1][n - 1] + 1);
   }
   for (let i = m - 2; i >= 0; i--) {
      for (let j = mat[i].length - 2; j >= 0; j--) {
         output[i][j] = mat[i][j] ? Math.min(Math.min(output[i + 1][j], output[i][j + 1]) + 1, output[i][j]) : 0;
      }
   }
   for (let i = 1; i < m; i++) {
      output[i][0] = Math.min(output[i][0], output[i - 1][0] + 1);
   }
   for (let i = 1; i < n; i++) {
      output[0][i] = Math.min(output[0][i], output[0][i - 1] + 1);
   }
   return output;
}
// @lc code=end
