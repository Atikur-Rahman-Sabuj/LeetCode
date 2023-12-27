/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let lastMax = neededTime[0], totalCost = neededTime[0];
    for(let i = 1 ; i < colors.length ; i++){
        if(colors[i] == colors[i-1]){
            totalCost += neededTime[i];
            lastMax = Math.max(lastMax, neededTime[i]);
        }else{
            totalCost -= lastMax;
            lastMax = neededTime[i];
            totalCost += lastMax;
        }
    }
    totalCost -= lastMax;
    return totalCost;
};