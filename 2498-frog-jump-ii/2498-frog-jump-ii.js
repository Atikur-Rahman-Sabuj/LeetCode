/**
 * @param {number[]} stones
 * @return {number}
 */
var maxJump = function(stones) {
    if(stones.length === 2) return stones[1] - stones[0]
    let ans = 0;
    for(let i = 1 ; i < stones.length-1 ; i++){
        ans = Math.max(ans, stones[i+1] - stones[i] + stones[i] - stones[i-1]);
    }
    return ans;
    
};