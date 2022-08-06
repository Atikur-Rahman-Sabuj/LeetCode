/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    let maxSteps = Math.floor(minutesToTest / minutesToDie) + 1;
    let pigs = 0;
    while(maxSteps ** pigs < buckets){
        pigs++;
    }
    return pigs;
};