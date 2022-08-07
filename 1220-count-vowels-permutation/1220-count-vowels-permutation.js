/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    const dp = new Array(n);
    const MOD = 1e9 + 7;
    dp[0] = [1,1,1,1,1];
    for(let i = 0 ; i < n-1 ; i++){
        dp[i+1] = [];
        
        dp[i+1][0] = (dp[i][1] + dp[i][2] + dp[i][4]) %MOD;
        
        dp[i+1][1] = (dp[i][0] + dp[i][2]) % MOD;
        
        dp[i+1][2] = (dp[i][1] + dp[i][3]) % MOD;
        
        dp[i+1][3] = dp[i][2];
        
        dp[i+1][4] = (dp[i][2] + dp[i][3]) % MOD;
    }
    
    let res = 0;
    for(let i = 0; i < 5; i++)
        res = (res + dp[n-1][i]) % MOD;
    //console.log(dp)
    
    return res;
};