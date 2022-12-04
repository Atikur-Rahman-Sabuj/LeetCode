/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    const s = sentence.split(" ");
    if(s[0][0] !== s[s.length-1][s[s.length-1].length - 1]) return false;
    for(let i = 1 ; i < s.length ; i++){
        if(s[i-1][s[i-1].length - 1] !== s[i][0]) return false;
    }
    return true;
};