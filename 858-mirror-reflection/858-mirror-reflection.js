/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function(p, q) {
    let mp = q, step = 1;
    while(mp%p !== 0){
        mp += q;
        step++;
    }
    let temp = mp/p;
    if(step%2 === 0) return 2;
    if(temp%2 === 0) return 0;
    return 1;
};