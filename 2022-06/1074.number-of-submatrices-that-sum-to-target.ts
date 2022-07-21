function numSubmatrixSumTarget(matrix: number[][], target: number): number {
   const m = matrix.length;
   const n = matrix[0].length;
   const map: Map<number, number> = new Map();
   for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
         if (i === 0 && j === 0) {
         } else if (i === 0) {
            matrix[i][j] += matrix[i][j - 1];
         } else if (j === 0) {
            matrix[i][j] += matrix[i - 1][j];
         } else {
            matrix[i][j] += matrix[i - 1][j] + matrix[i][j - 1] - matrix[i - 1][j - 1];
         }

         
      }
   }
}
