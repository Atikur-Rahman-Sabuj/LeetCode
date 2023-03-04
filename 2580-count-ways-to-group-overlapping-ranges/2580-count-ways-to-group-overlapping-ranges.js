/**
 * @param {number[][]} ranges
 * @return {number}
 */
var countWays = function(ranges) {
    const module = 1e9 + 7;
    ranges.sort((a,b)=>a[0]-b[0]);
    let count = 1, end = ranges[0][1]
    for(let i = 1 ; i < ranges.length ; i++){
        if(ranges[i][0] > end){
            count++;
        }
        end = Math.max(end,ranges[i][1]);
    }
    let res = 1;
    while(count--){
        res = (res * 2) % module
    }
    return res

};