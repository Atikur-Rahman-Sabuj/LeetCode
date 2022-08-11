/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length === 0) return [newInterval];
    const n = intervals.length;
    let lb = 0;
    if(newInterval[0] < intervals[0][0]){
        lb = -1;
    }else if(newInterval[0] > intervals[n-1][1]){
        lb = n;
    }
    else{
        lb = lowerBound(0, n-1, newInterval[0]);
    }
    
    if(lb === n) return [...intervals, newInterval];
  
    if(lb === -1 && intervals[0][0] > newInterval[1] ){
        return [newInterval, ...intervals];
    }else if(lb === -1){
        lb = 0;
    }
    
    let overLapStart = lb, low = 0, high = 0;
    let totalOverlap = 0;
    //console.log(lb)
    if(newInterval[0] >= intervals[lb][0] && newInterval[0] <= intervals[lb][1]) {
         totalOverlap++;
         low = Math.min(newInterval[0], intervals[lb][0])
         high = Math.max(newInterval[1], intervals[lb][1])
         lb++;
    }else{
        low = newInterval[0];
        high = newInterval[1];
    }
    //console.log(overLapStart, totalOverlap, low, high)
    while(lb < n && newInterval[1]>=intervals[lb][0]){
        totalOverlap++;
        high = Math.max(newInterval[1], intervals[lb][1]);
        lb++
    }
    //console.log(intervals)
    //console.log(overLapStart, totalOverlap, low, high)
    
    intervals.splice(overLapStart, totalOverlap, [low, high]);
    return intervals
    
    
    
    
    
    
    
    
    
    
    
    
    
    function lowerBound(min, max, val){
        let mid = Math.floor((min+max)/2);
        if(intervals[mid][0] <= val && intervals[mid][1]>=val){
            return mid;
        }
        if(intervals[mid][1]<val && intervals[mid+1][0]>val){
            return mid+1;
        }
        return intervals[mid][0] > val?lowerBound(min,mid,val):lowerBound(mid+1, max, val);
    }
    
};