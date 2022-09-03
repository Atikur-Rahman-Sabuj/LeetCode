/**
 * @param {number[][]} mat
 * @param {number} cols
 * @return {number}
 */
var maximumRows = function(mat, cols) {
    const m = mat.length;
    const n = mat[0].length;
    if(cols === n) return m;
    let ans = 0;
    perMute(0, []);
    function perMute(index, arr){
        if(arr.length === cols){
            let total = 0;
            for(let i = 0 ; i < m ; i++){
                let sum = 0;
                for(let j = 0 ; j < n ; j++){
                    if(mat[i][j] === 1 && !arr.includes(j)){
                        sum = 1;
                        break;
                    }
                }
                if(sum === 0) total++;
             }
            ans = Math.max(ans, total);
        }else if(index > n){
            return;
        }
        else{
            perMute(index+1, [...arr, index]);
            perMute(index+1, arr);
        }  
    }
    
    return ans;

    
};