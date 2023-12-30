const charToIndex = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);
/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const freq = new Array(26).fill(0);
    const len = words.length;
    words.forEach(word => {
        word.split("").forEach(char => {
            freq[charToIndex(char)]++;
        })
    })
    for(let i = 0 ; i < 26 ;i++){
        if(freq[i] % len != 0) return false;
    }
    return true;
};

