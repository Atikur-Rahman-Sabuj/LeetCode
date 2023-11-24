/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort((a,b) => b - a);
    const n = (piles.length/3) * 2
    let ans = 0;
    for(let i = 1 ; i < n ; i = i+2){
        ans += piles[i];
    }
    return ans;
};