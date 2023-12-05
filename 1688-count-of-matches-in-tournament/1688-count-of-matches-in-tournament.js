/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let ans = 0;
    while(n > 1){
        ans += Math.floor(n / 2);
        n = Math.ceil(n / 2);
    }
    return ans;
};