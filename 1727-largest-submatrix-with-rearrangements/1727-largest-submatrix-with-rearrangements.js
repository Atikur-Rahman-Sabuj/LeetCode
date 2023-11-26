/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const sum = new Array(m).fill(null).map( _ => new Array(n).fill(0));
    for(let i = 0 ; i < n ; i++){
        let c = 0;
        for(let j = 0 ; j < m ; j++){
            if(matrix[j][i] === 1){
                c++;
            }else{
                c = 0;
            }
            sum[j][i] = c;
            
        }
    }
    let ans = 0;
    for(let i = 0 ; i < m ; i++){
        sum[i].sort((a,b) => b-a);
        for(let j = 0 ; j < n; j++){
            ans = Math.max(ans, (j+1) * sum[i][j]);
        }
    }
    return ans;
    
};