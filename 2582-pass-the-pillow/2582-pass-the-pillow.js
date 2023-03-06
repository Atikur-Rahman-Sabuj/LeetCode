/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let turn = Math.floor(time / (n-1))
    let pos = time % (n-1);
    if(turn & 1){
        return n - pos;
    }else{
        return pos+1;
    }
};