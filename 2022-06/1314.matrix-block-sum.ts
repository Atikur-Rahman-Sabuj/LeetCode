/*
 * @lc app=leetcode id=1314 lang=typescript
 *
 * [1314] Matrix Block Sum
 */

// @lc code=start
function matrixBlockSum(mat: number[][], k: number): number[][] {
   const sumMatrix: number[][] = [];
   for (let i = 0; i < mat.length; i++) {
      sumMatrix[i] = [];
      for (let j = 0; j < mat[0].length; j++) {
         sumMatrix[i][j] =
            mat[i][j] +
            (i > 0 ? sumMatrix[i - 1][j] : 0) +
            (j > 0 ? sumMatrix[i][j - 1] : 0) -
            (i > 0 && j > 0 ? sumMatrix[i - 1][j - 1] : 0);
      }
   }
   console.log(sumMatrix);
   const res: number[][] = [];
   for (let i = 0; i < mat.length; i++) {
      const row: number[] = [];
      for (let j = 0; j < mat[0].length; j++) {
         const r1 = i - k < 0 ? 0 : i - k;
         const c1 = j - k < 0 ? 0 : j - k;
         const r2 = i + k >= mat.length ? mat.length - 1 : i + k;
         const c2 = j + k >= mat[0].length ? mat[0].length - 1 : j + k;
         console.log(r1, c1, r2, c2);
         const t1 = sumMatrix[r2][c2];
         const t2 = sumMatrix[r2][c1 - 1] || 0;
         const t3 = sumMatrix[r1 - 1] !== undefined ? sumMatrix[r1 - 1][c2] || 0 : 0;
         const t4 = sumMatrix[r1 - 1] !== undefined ? sumMatrix[r1 - 1][c1 - 1] || 0 : 0;
         console.log(t1, t2, t3, t4);
         row[j] = t1 - t2 - t3 + t4;
      }
      res.push(row);
   }
   return res;
}
// @lc code=end
