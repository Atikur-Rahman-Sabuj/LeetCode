/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    const m = mat.length, n = mat[0].length;
    const temp = [];
    
    for(let i = 0 ; i < m ; i++){
        let j = i, k = 0;
        while(j < m && k < n){
            temp.push(mat[j][k]);  
            j++;
            k++;
        }
        temp.sort((a, b) => a - b);
        j = i;
        k = 0;
        while(j < m && k < n){
            mat[j][k] = temp.shift();;  
            j++;
            k++;
        }
    }
    
    for(let i = 1 ; i < n ; i++){
        let j = 0, k = i; 
        while(j < m && k < n){
            temp.push(mat[j][k]);  
            j++;
            k++;
        }
        temp.sort((a, b) => a - b);
        j = 0;
        k = i;
        while(j < m && k < n){
            mat[j][k] = temp.shift();;  
            j++;
            k++;
        }
    }
    return mat;
};