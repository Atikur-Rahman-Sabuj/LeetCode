/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    var dp = new Array(s.length).fill(null).map( _ => new Array(s.length).fill(0))
    for(var i = s.length - 1; i >= 0; i--) {
        for(var j = i; j < s.length; j++) {
            if(s[i] === s[j]) {
                if(j - i <= 1) {
                    dp[i][j] = j - i + 1;
                } else {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                }
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    return s.length - dp[0][s.length - 1]
};