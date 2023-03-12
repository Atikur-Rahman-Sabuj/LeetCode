/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const VOWELS = ["a", "e", "i", "o", "u"]
    let ans = 0
    for(let i = left; i <= right ; i++){
        if( VOWELS.includes(words[i][0]) && VOWELS.includes(words[i][words[i].length - 1])){
            ans++
        }
    }
    return ans
};