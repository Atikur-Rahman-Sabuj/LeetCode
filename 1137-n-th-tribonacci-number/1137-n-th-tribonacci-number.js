/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let t0 = 0, t1 = 1, t2 = 1;
    if(n === 0) return 0
    if(n === 1 || n === 2) return 1
    
    for(let i = 3 ; i <= n ; i++){
        let temp = t0 + t1 + t2;
        t0 = t1;
        t1 = t2;
        t2 = temp;
    }
    
    return t2;
};