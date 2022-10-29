/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function(plantTime, growTime) {
    const times = plantTime.map((pt,i)=>[pt, growTime[i]])
    times.sort((a,b)=>b[1]-a[1]);
    let ans = 0;
    let lastP = 0;
    times.forEach(t=>{
        ans = Math.max(ans, lastP + t[0] + t[1]);
        lastP = lastP + t[0];
    })
    return ans;
};