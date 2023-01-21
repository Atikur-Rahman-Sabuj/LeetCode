/**
 * @param {number} targetX
 * @param {number} targetY
 * @return {boolean}
 */
var isReachable = function(targetX, targetY) {
    while(!(targetX & 1)){
        targetX = targetX >> 1;
    }
    while(!(targetY & 1)){
        targetY = targetY >> 1;
    }
    
    return gcd(targetX, targetY) === 1
    
    function gcd(a, b){
        if(a % b === 0) return b;
        return gcd(b, a % b);
    }
};