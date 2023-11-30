/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function(n) {
    let result = 0;
    let operationSign = 1;

    for (let bitPosition = 30; bitPosition >= 0; bitPosition--) {
        if (n & (1 << bitPosition)) {
            result += ((1 << (bitPosition + 1)) - 1) * operationSign;
            operationSign *= -1;
        }
    }

    return result;
};