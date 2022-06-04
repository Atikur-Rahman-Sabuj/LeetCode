/*
 * @lc app=leetcode id=120 lang=typescript
 *
 * [120] Triangle
 */

// @lc code=start
function minimumTotal(triangle: number[][]): number {
   let res: number[] = triangle[0];

   for (let i = 1; i < triangle.length; i++) {
      const row: number[] = [];
      for (let j = 0; j < triangle[i].length; j++) {
         const value1 = j === 0 ? res[j] : res[j - 1];
         const value2 = j === triangle[i].length - 1 ? res[j - 1] : res[j];
         const min = Math.min(value1, value2);
         row[j] = min + triangle[i][j];
      }
      res = row;
   }
   return Math.min(...res);
}
// @lc code=end
