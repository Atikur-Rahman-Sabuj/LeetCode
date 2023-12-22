/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let totalOnes = 0;
    for(const num of s){
        if(num == '1') totalOnes++;
    }
    let zeroSum = 0, oneSum = 0, score = 0;
    for(let i = 0; i < s.length - 1 ; i++){
        const num = s[i];
        if(num == '0') zeroSum++
        else oneSum++
        score = Math.max(score, zeroSum + totalOnes - oneSum);
    }
    return score;
};