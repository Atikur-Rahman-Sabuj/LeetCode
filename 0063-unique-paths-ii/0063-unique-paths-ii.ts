function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
   const m = obstacleGrid.length;
   const n = obstacleGrid[0].length;
   const res: number[][] = [];

   for (let i = 0; i < m; i++) {
      res[i] = [];
      for (let j = 0; j < n; j++) {
         if (obstacleGrid[i][j] === 1) {
            res[i][j] = 0;
         } else if (j === 0) {
            res[i][j] = res[i - 1] !== undefined ? res[i - 1][j] : 1;
         } else if (i === 0) {
            res[i][j] = res[i][j - 1] !== undefined ? res[i][j - 1]: 1;
         } else {
            res[i][j] = res[i - 1][j] + res[i][j - 1];
         }
      }
   }
   console.log(res)
   return res[m - 1][n - 1];
};