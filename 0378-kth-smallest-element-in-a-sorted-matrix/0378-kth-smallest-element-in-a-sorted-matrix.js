/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let lo = matrix[0][0], hi = matrix[matrix.length - 1][matrix[0].length - 1] + 1;
    while(lo < hi){
        let mid = Math.floor((hi+lo)/2);
        let count = 0, j = matrix[0].length - 1
        for(let i = 0 ; i < matrix.length ; i++){
            while(j >= 0 && matrix[i][j] > mid){
                j--;
            }
            count += (j+1)
        }
        if(count < k) lo = mid + 1
        else hi = mid
    }
    return lo;
};
