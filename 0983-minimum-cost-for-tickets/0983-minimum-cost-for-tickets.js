/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    days.sort((a,b) => a - b)
    const dp = new Array(days.length).fill(Infinity);
    let j = 0;
    let k = 0;
    const dayMin = Math.min(...costs)
    const weekMin = Math.min(costs[1], costs[2])
    dp[0] = dayMin;
    for(let i = 1 ; i < days.length ; i++){
        while(days[i] - days[j] > 6){
            j++;
        }
        while(days[i] - days[k] > 29){
            k++;
        }
        dp[i] = Math.min((dp[i-1] + dayMin), (dp[j-1] || 0)+weekMin, (dp[k-1] || 0)+costs[2]);
    }
    return dp[days.length - 1];
};