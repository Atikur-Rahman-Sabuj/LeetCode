/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
   const res: number[][] = [];
   for (let i = 0; i < numRows; i++) {
      const row: number[] = [];
      for (let j = 0; j <= i; j++) {
         if (j === 0 || j === i) {
            row.push(1);
         } else {
            row.push(res[i - 1][j - 1] + res[i - 1][j]);
         }
      }
      res.push(row);
   }
   return res;
}
// @lc code=end
