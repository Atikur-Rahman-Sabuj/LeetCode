/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function(n, queries) {
    const mat = new Array(n).fill(null).map(_=>new Array(n).fill(0))
    for(let q = 0 ; q < queries.length ; q++){
        for(let i = queries[q][0] ; i <= queries[q][2] ; i++){
            for(let j = queries[q][1] ; j <= queries[q][3] ; j++){
                mat[i][j]++;
            }
        }
    }
    return mat;
};