/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const ans = [0];
    for(let i = 1 ; i <= n ; i++){
        ans[i] = ans[Math.floor(i/2)] + i % 2;
    }
    return ans;
};