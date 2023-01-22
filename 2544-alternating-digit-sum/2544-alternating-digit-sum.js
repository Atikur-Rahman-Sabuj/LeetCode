/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let sum = 0, multiplier = 1;
    const st = [];
    while(n > 0){
        st.push(n % 10)
        n = Math.floor(n / 10)
    }
    while(st.length > 0){
        sum += st.pop() * multiplier
        multiplier *= -1
    }
    return sum
};