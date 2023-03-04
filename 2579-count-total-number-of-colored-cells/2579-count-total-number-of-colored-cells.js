/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    let res = 1
    for(let i = 2 ; i <= n ; i++){
        res += (i-1)*4
    }
    return res;
};