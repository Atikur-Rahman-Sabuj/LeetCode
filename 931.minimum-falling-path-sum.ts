/*
 * @lc app=leetcode id=931 lang=typescript
 *
 * [931] Minimum Falling Path Sum
 */

// @lc code=start
function minFallingPathSum(matrix: number[][]): number {
   let res: number[] = matrix[0];

   for (let i = 1; i < matrix.length; i++) {
      const row: number[] = [];
      for (let j = 0; j < matrix[0].length; j++) {
         const min = Math.min(
            res[j - 1] || Number.MAX_VALUE,
            res[j] || Number.MAX_VALUE,
            res[j + 1] || Number.MAX_VALUE
         );
         row[j] = min + matrix[i][j];
      }
      res = row;
   }
   return Math.min(...res);
}
// @lc code=end
