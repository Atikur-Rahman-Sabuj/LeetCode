/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const mat = new Array(n).fill(null).map(_ => new Array(n).fill(0));
    const shift = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let temp = 0;
    fill(0, 0, 1);
    return mat;
    
    function fill(i, j, val){
        if(val > n*n) return;
        mat[i][j] = val
        let nexti = i + shift[temp][0]
        let nextj = j + shift[temp][1]

        if(nexti < 0 || nextj < 0 || nexti >= n || nextj >= n || mat[nexti][nextj] > 0){
            temp = (temp + 1) % 4
        }
        
        fill(i + shift[temp][0], j + shift[temp][1], val + 1);
    }
};