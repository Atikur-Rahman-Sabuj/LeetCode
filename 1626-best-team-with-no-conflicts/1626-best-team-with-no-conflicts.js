/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    const sa = scores.map((s,i)=> [s, ages[i]]);
    sa.sort((a,b) => a[1] - b[1] || a[0] - b[0]);
    let c = 0, nc = 0;
    const dp = new Array(scores.length).fill(0);
    for(let i = 0 ; i < scores.length ; i++){
        dp[i] = sa[i][0]
        for(let j = 0 ; j < i ; j++){
            if(sa[i][0] >= sa[j][0]){
                dp[i] = Math.max(dp[i], dp[j]+sa[i][0]);
            } 
        }
    }
    return Math.max(...dp);
};