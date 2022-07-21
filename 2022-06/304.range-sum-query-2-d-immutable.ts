/*
 * @lc app=leetcode id=304 lang=typescript
 *
 * [304] Range Sum Query 2D - Immutable
 */

// @lc code=start
class NumMatrix {
   dp: number[][];
   constructor(M) {
      let ylen = M.length + 1,
         xlen = M[0].length + 1;
      this.dp = Array.from({ length: ylen }, () => new Array(xlen).fill(0));
      for (let i = 1; i < ylen; i++)
         for (let j = 1; j < xlen; j++)
            this.dp[i][j] = M[i - 1][j - 1] + this.dp[i - 1][j] + this.dp[i][j - 1] - this.dp[i - 1][j - 1];
   }

   sumRegion(R1, C1, R2, C2) {
      return this.dp[R2 + 1][C2 + 1] - this.dp[R2 + 1][C1] - this.dp[R1][C2 + 1] + this.dp[R1][C1];
   }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
