/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a,b)=> a[0]-b[0])
    let ans = 0 , r = -1001;
    for(const [a, b] of pairs){
        if(a > r){
            ans++;
            r = b;
        }else{
            r = Math.min(r, b)
        }
    }
    return ans;
};