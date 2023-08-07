/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    if(m*n === 1) return matrix[0][0] === target;
    let low = 0, high = m*n - 1;
    while(low <= high){
        //console.log(low, high);
        let mid = Math.floor((low + high) / 2);
        let midI = valueToIndex(mid);
        //console.log(mid, midI)
        if(target === matrix[midI[0]][midI[1]] ) return true;
        if(target < matrix[midI[0]][midI[1]]){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    
    function valueToIndex (value) {
        const i = Math.floor(value / n);
        const j = value % n;
        return [i,j];
    }
    
    return false;
};