/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    const ss = new Array(26);
    const tt = new Array(26);
    
    for(let i = 0; i<26 ; i++){
        ss[i] = 0;
        tt[i] = 0;
    }
    
    for(ch of s){
        ss[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    for(ch of t){
        tt[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    for(let i = 0; i<26 ; i++){
        if(ss[i] !== tt[i]) return false;
    }
    return true;
    
};