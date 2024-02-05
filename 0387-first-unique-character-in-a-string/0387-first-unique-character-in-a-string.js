/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const freq = new Array(26).fill(0);
    for(const char of s){
        freq[charToIndex(char)]++;
    }
    for(let i = 0 ; i < s.length ; i++){
        const charI = charToIndex(s[i]);
        if(freq[charI] == 1) return i;
    }
    return -1;
};

function charToIndex(char){
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
}