/**
 * @param {string} s
 * @return {number}
 */
var appealSum = function(s) {
    let ans = 0;
    const last = new Array(26).fill(0);
    for(let i = 0 ; i < s.length ; i++){
        last[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i+1;
        for(const l of last){
            ans += l;
        }
    }
    return ans;
};