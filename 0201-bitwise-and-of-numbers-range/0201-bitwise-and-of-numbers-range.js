/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let diff = 1;
    let rl = right - left;
    let ans = 0;
    for(let i = 1 ; i < 32 ; i++){
        if(rl <= diff){
            let temp = left & diff & right;
            ans = ans | temp;
        }
        diff  <<= 1;
    }
    return ans;
};