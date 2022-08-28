/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    //find last positions of each type of garbage
    //and calculate total garbage
    let pEnd = 0, mEnd = 0, gEnd = 0, total = 0;
    for(let i = garbage.length - 1 ; i >= 0 ; i--){
        total += garbage[i].length;
        if(garbage[i].includes("M") && mEnd === 0){
            mEnd = i;
        }
        if(garbage[i].includes("P") && pEnd === 0){
            pEnd = i;
        }
        if(garbage[i].includes("G") && gEnd === 0){
            gEnd = i;
        }
    }
    //add trabel time with for each garbage type untill 
    //their last position
    for(let i = 0  ; i < travel.length ; i++){
        if(mEnd > i) total += travel[i];
        if(pEnd > i) total += travel[i];
        if(gEnd > i) total += travel[i];
    }
    return total;
};