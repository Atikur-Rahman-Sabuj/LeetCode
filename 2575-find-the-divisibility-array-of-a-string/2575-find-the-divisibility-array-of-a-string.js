/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function(word, m) {
    const ans = [], n = word.length;
    let r = 0;
    for(let i = 0 ; i < n ; i++){
        let temp = parseInt(r+word[i])
        r = temp%m;
        ans[i] = r === 0?1:0
    }
    return ans;
};