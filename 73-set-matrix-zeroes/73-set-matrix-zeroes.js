/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let row0 = 1, col0 = 1;
    for (let i = 0 ; i < n ; i++){
        if(matrix[0][i] === 0) {
            row0 = 0;
            break;
        }
    }
    
    for (let i = 0 ; i < m ; i++){
        if(matrix[i][0] === 0){ 
            col0 = 0;
            break;
        }
    }
    
    for(let i = 1 ; i < m ; i++){
        for(let j = 1 ; j < n ; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for(let i = 1 ; i < m ; i++){
        for(let j = 1 ; j < n ; j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0;
            }
        }
    }
    
    for (let i = 0 ; i < n ; i++){
        if(row0 === 0) {
            matrix[0][i] = 0;
        }
    }
    
    for (let i = 0 ; i < m ; i++){
        if(col0 === 0){ 
            matrix[i][0] = 0
        }
    }

    
    return matrix;
    
};