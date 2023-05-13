/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    const MODULO = 1e9 + 7;
    const dp = new Array(high+1).fill(0);
    dp[0] = 1;
    let ans = 0;
    for(let i = 1 ; i <= high ; i++){
        dp[i] = ((dp[i-zero] || 0) +  (dp[i-one] || 0)) % MODULO;
        if(i >= low){
            ans += dp[i]
            ans = ans % MODULO
        }
    }
    return ans
};