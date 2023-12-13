/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const row = new Array(mat[0].length).fill(0);
    const column = new Array(mat.length).fill(0);
    for(let i = 0 ; i < mat.length ; i++){
        for(let j = 0 ; j < mat[0].length ; j++){
            row[j] += mat[i][j];
            column[i] += mat[i][j]
        }
    }
    let ans = 0;
    console.log(row, column)
    for(let i = 0 ; i < mat.length ; i++){
        for(let j = 0 ; j < mat[0].length ; j++){
            if(mat[i][j] === 1 && row[j] === 1 && column[i] === 1){
                ans++
            }
        }
    }
    return ans;
};