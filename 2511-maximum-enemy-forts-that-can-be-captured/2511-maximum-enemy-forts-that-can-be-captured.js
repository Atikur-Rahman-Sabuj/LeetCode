/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
    let ans = 0;
    let zs = -1;
    for(let i = 1 ; i < forts.length ; i++){
        if(forts[i] === 0){
            if(zs === -1){
                zs = i;
            }    
        }else{
            if(zs !== -1){
                if(forts[i] * forts[zs-1] === -1){
                    ans = Math.max(ans, i-zs);
                }
            }
            zs = -1;
        }
    }

    return ans
};