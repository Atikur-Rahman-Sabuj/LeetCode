/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    const c = new Map();
    const freq = new Array(n).fill(0);
    for(const l of roads){
        l.sort((a,b) => a - b) 
        c.set(l[0]+"-"+l[1], 1);
        freq[l[0]]++;
        freq[l[1]]++;
    }
    let ans = 0;
    for(let i = 0 ; i < n - 1 ; i++){
        for(let j = i+1 ; j < n ; j++){
            let hasC = c.has(i+"-"+j)?1:0
            ans = Math.max(ans, freq[i]+freq[j]-hasC)
        }
    }
    return ans;
    
    
};