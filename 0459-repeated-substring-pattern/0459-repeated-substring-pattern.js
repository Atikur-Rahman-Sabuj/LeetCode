/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const len = s.length;
    for(let i = 1 ; i <= Math.floor(len/2) ; i++){
        if(s[i] === s[0] && check(s, i)) return true; 
    }
    return false;
    
};

function check(s, i){
    if(s.length % i !== 0) return false;
    for(let k = 0 ; k < i ; k++){
        for(let j = 1 ; j < s.length / i ; j++){
            if(s[j*i+k] !== s[k]) return false;
            
        }
    }
    return true;
}