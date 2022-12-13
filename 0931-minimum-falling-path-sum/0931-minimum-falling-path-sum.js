/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let res = matrix[0];

   for (let i = 1; i < matrix.length; i++) {
      const row = [];
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
};