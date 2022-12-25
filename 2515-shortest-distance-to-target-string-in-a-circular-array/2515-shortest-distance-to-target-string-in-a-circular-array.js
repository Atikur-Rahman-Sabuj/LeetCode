/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    let ans = 200;
    for(let i = 0 ; i < words.length ; i++){
        if(words[i] === target){
            const big = Math.max(i, startIndex);
            const small = Math.min(i, startIndex);
            ans =  Math.min(ans, big - small, words.length - big + small);
        }
        
    }
    return ans === 200? -1 : ans

};