/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length - 1;
    let carry = 1;
    let temp = 0;
    while(carry > 0 && n >= 0){
        temp = digits[n]; 
        digits[n] = (temp + carry) % 10; 
        carry = Math.floor((temp + carry)/10) 
        n--;
    }

    if(n < 0 && carry){
        digits.unshift(1);
    }
    return digits;
};