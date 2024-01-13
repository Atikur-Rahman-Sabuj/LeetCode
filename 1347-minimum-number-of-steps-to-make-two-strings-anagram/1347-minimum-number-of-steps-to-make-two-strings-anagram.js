/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const freq1 = new Array(26).fill(0);
    const freq2 = new Array(26).fill(0);
    for(let i = 0 ; i < s.length ; i++){
        const char1 = s[i];
        const char2 = t[i];
        freq1[charToIndex(char1)]++;
        freq2[charToIndex(char2)]++;
    }
    let ans = 0;
    for(let i = 0 ; i < 26 ; i++){
        if(freq2[i] > freq1[i]){
            ans += freq2[i] - freq1[i]
        }
    }
    return ans;
};

function charToIndex(char){
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
}