/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    const find = (i, j)=>{
        //console.log(i,j)
        if(i === m || j === -1) return false;
        if(matrix[i][j] === target) return true;
        return matrix[i][j]>target? find(i, j-1):find(i+1, j)
        
    }
    return find(0, n-1);
};