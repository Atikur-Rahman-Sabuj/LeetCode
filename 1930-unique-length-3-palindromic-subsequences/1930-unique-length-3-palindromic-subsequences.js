/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const n = s.length;
    const f = new Array(26).fill(null);
    const l = new Array(26).fill(null);
    for(let i = 0 ; i < n ; i++){
        let c = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if(f[c] === null){
            f[c] = i;
        }
    }
    for(let i = n-1 ; i >= 0 ; i--){
        let c = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if(l[c] === null){
            l[c] = i;
        }
    }
    let ans = 0;
    for(let i = 0 ; i < 26 ; i++){
        if(f[i] === null) continue;
        const set = new Set(); 
        for(let j = f[i]+1 ; j < l[i] ; j++){
            if(set.has(s[j])) continue;
            ans++;
            set.add(s[j])
        }
    }
    return ans;
};