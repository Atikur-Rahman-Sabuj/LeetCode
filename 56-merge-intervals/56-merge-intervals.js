/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let out = [intervals[0]], index = 0;
    for(let i = 1 ; i < intervals.length ; i++){
        if(out[index][1] >= intervals[i][0]){
            out[index][1] = Math.max(intervals[i][1], out[index][1]);
        }else{
            out[++index] = intervals[i];
        }
    }
    return out;
};