/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let ans = 0, temp = num;
    while(temp > 0){
        let digit = temp % 10;
        if(num % digit === 0) ans++
        temp = Math.floor(temp / 10);
    }
    return ans
};