/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    for(let i = 0 ; i < dist.length ; i++){
        dist[i] = Math.ceil(dist[i] / speed[i]);
    }
    dist.sort((a,b) => a - b);
   // console.log(dist)
    let ans = 1;
    
    for(let i = 1 ; i < dist.length ; i++){
        if(i < dist[i]) ans++
        else break;
    }
    return ans;
};