/*
 * @lc app=leetcode id=64 lang=typescript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
   const m = grid.length;
   const n = grid[0].length;
   const dp: number[][] = [];
   dp[0] = [];
   dp[0][0] = grid[0][0];
   for (let i = 1; i < m; i++) {
      dp[i] = [];
      dp[i][0] = dp[i - 1][0] + grid[i][0];
   }
   for (let j = 1; j < n; j++) {
      dp[0][j] = dp[0][j - 1] + grid[0][j];
   }
   for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
         dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
   }
   return dp[m - 1][n - 1];
}
// @lc code=end
