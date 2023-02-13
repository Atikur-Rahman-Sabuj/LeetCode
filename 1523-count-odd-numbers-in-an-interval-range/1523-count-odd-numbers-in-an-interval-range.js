/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    const d = high - low;
    if(d & 1){
        return Math.ceil(d/2)
    }else{
        return low & 1? Math.ceil(d/2)+1 : Math.floor(d/2)
    }
};