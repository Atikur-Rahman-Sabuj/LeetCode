function uniquePaths(m: number, n: number): number {
   const res: number[][] = [];
   for (let i = 0; i < m; i++) {
      res[i] = [];
      for (let j = 0; j < n; j++) {
         if (i === 0 || j === 0) {
            res[i][j] = 1;
         } else {
            res[i][j] = res[i - 1][j] + res[i][j - 1];
         }
      }
   }
   return res[m - 1][n - 1];
};