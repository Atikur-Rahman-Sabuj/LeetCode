/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let small = n, i = n;
    let big = n*(n+1)/2;
    while(big > small){
        big -= i;
        i--;
        small += i;
    }
    if(big === small) return i;
    else return -1;
    
};