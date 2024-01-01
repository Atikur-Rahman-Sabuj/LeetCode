/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a - b)
    s.sort((a,b) => a - b)
    let k = 0, ans = 0;
    for(let i = 0 ; i < g.length ; i++){
        while(k < s.length && g[i] > s[k]){
            k++;
        }
        if(k < s.length) ans++;
        else break;
        k++;
    }
    return ans;
};