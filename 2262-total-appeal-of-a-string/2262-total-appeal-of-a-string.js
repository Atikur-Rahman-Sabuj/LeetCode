/**
 * @param {string} s
 * @return {number}
 */
var appealSum = function(s) {
    let ans = 0, total = 0;
    const last = new Array(26).fill(0);
    for(let i = 0 ; i < s.length ; i++){
        let charCode = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        total = total - last[charCode] + i + 1;
        last[charCode] = i+1;
        ans += total;
    }
    return ans;
};