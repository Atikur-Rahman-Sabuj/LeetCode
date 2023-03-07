/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let low = 1, high = Number.MAX_SAFE_INTEGER
    while(low < high){
        let mid = Math.floor((low+high)/2)
        if(satisfy(mid)){
            high = mid
        }else{
            low = mid + 1
        }
    }
    
    return low;
    
    function satisfy(val){
        let trip = 0;
        for(let i = 0 ; i < time.length ; i++){
            trip += Math.floor(val / time[i])
        }
        return trip >= totalTrips
    }
};