/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let high = piles.reduce((sum, it)=>{
        return sum + it
    }, 0)
    let low = 1;
    while(low < high){
        let mid = Math.floor((low + high) / 2)
        if(checkFeasibility(mid)){
            high = mid
        }else{
           low = mid+1 
        }
    }
    return low
    
    function checkFeasibility(k){
    let hour = 0;
    for(let i = 0 ; i < piles.length ; i++){
        hour += Math.ceil(piles[i] / k)
    }
    return hour <= h
}
};

