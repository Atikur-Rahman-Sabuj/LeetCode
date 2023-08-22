/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = ''
    while(columnNumber > 26) {
        let last = columnNumber % 26
        last == 0 ? last = 26 : 0
        result += String.fromCharCode(64 + last)
        columnNumber = (columnNumber - last) / 26
    }
    result += String.fromCharCode(64 + columnNumber)
    return result.split('').reverse().join('')
};