/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(const word of words){
        if(isPalindrome(word)) return word;
    }
    return ""
};

function isPalindrome(word){
    const len = word.length
    for(let i = 0 ; i < (word.length / 2) ; i++){
        if(word[i] != word[len-1-i]) return false;
    }
    return true;
}