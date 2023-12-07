/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    for(let i = num.length - 1 ; i >= 0 ; i--){
        if(parseInt(num[i]) & 1){
            return num.substring(0, i+1);
        }
    }
    return "";
};