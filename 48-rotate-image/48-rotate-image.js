/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const m = matrix.length;
    const depth = Math.floor(m/2);
    for(let d = 0 ; d < depth ; d++){
        for(let j = d ; j < m - d - 1; j++){
            let temp = matrix[d][j];
            matrix[d][j] = matrix[m - 1 -j][d];
            matrix[m - 1 -j ][d] = matrix[m - 1 - d][m - 1 - j];
            matrix[m - 1 - d][m - 1 - j] = matrix[j][m - 1 - d];
            matrix[j][m - 1 - d] = temp;
        }
    }
    return matrix;
};