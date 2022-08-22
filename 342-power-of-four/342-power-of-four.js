/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let nn = Math.log(n)/Math.log(4);
    return nn % 1 === 0;
};