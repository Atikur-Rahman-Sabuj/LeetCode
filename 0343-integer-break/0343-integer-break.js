/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n === 2) return 1;
    if(n === 3) return 2;
    if(n === 4) return 4;
    if(n === 5) return 6;
    let ans = 1;
    while(n > 4){
        n -= 3;
        ans *= 3;
    }
    return ans*n;
};


