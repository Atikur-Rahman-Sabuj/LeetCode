/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    if(numOnes >= k) return k
    if((numOnes + numZeros) >= k) return numOnes
    return numOnes - (k  - numOnes - numZeros)
};