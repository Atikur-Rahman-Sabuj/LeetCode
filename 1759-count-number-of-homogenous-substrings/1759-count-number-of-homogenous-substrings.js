/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    const sum = [0], MODULO = 1e9 + 7;
    for(let i = 1 ; i <= 100000 ; i++){
        sum[i] = sum[i-1] + i;
    }
    let freq = 0, lchar = '0', ans = 0;
    for(let i = 0 ; i <= s.length ; i++){
        if(lchar === s[i]){ 
            freq++;
        }else{
            ans = (ans + sum[freq]) % MODULO;
            lchar = s[i];
            freq = 1;
        }
    }
    return ans;
};

