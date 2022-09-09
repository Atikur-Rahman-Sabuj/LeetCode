/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    //console.log(intervals)
    let lastEnd = intervals[0][1];
    let result = 0;
    for(let i = 1; i < intervals.length ; i++){
        if(intervals[i][0] < lastEnd){
            result++;
            if(intervals[i][1] < lastEnd){
                lastEnd = intervals[i][1];
            }
        }else{
            lastEnd = intervals[i][1];
        }
        
    }
    return result;
};