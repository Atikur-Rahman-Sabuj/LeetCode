const charToIndex = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0)
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const len = s.length;
    const firstIndex = new Array(26).fill(len)
    for(let i = 0 ; i < len ; i++){
        const char = s[i]
        firstIndex[charToIndex(char)] = Math.min(firstIndex[charToIndex(char)], i)
    }
    let ans = -1
    for(let i = len - 1  ; i >= 0 ; i--){
        const index = charToIndex(s[i])
        if(i != firstIndex[index]){
            ans = Math.max(ans, i - firstIndex[index] - 1)
        }
    }
    return ans
};