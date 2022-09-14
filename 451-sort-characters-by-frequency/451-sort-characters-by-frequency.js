/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let freq = new Array(75);
    for(let i = 0 ; i < 75 ; i++){
        freq[i] = [i, 0];
    }
    for(const char of s){
        freq[char.charCodeAt(0) - '0'.charCodeAt(0)][1]++;
    }
    freq.sort((a,b)=>b[1]-a[1]);
    const ans = [];
    for(let i = 0 ; i < 75 ; i++){
        ans.push(String.fromCharCode(freq[i][0] + '0'.charCodeAt(0)).repeat(freq[i][1]));
    }
    return ans.join("");
};