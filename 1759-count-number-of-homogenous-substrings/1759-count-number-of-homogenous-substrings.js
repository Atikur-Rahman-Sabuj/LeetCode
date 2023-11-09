/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    const MODULO = 1e9 + 7;
    let freq = 0, lchar = '0', ans = 0;
    for(let i = 0 ; i <= s.length ; i++){
        if(lchar === s[i]){ 
            freq++;
        }else{
            ans = (ans + (((freq)*(freq+1))/2)) % MODULO;
            lchar = s[i];
            freq = 1;
        }
    }
    return ans;
};

