/*
 * @lc app=leetcode id=221 lang=typescript
 *
 * [221] Maximal Square
 */

// @lc code=start
function maximalSquare(matrix: string[][]): number {
   const m = matrix.length;
   const n = matrix[0].length;
   const dp: number[][] = [];
   let max = 0;
   for (let i = 0; i < m; i++) {
      dp[i] = [];
      for (let j = 0; j < n; j++) {
         if (matrix[i][j] === "1") {
            dp[i][j] = 1;
            if (i > 0 && j > 0) {
               dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
            max = Math.max(max, dp[i][j]);
         } else {
            dp[i][j] = 0;
         }
      }
   }
   return max * max;
}
// @lc code=end
