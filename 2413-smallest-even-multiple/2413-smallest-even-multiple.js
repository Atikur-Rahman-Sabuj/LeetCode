/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    return n & 1 ? n * 2 : n;
};