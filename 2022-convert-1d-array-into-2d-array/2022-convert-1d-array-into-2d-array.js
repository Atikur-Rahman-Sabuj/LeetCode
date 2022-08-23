/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(original.length !== (m * n)) return [];
    const ans = [];
    for(let i = 0 ; i < m ; i++){
        ans[i] = [];
        for(let j = 0 ; j < n ; j++){
            ans[i][j] = original[i*n + j]
        }
    }
    return ans;
};