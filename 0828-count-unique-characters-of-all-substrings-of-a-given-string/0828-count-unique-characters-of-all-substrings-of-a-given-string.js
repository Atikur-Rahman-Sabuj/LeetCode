/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
    let ans = 0;
    const last = new Array(52).fill(-1);
    for(let i = 0 ; i < s.length ; i++){
        const charCode = s[i].charCodeAt(0) - 'A'.charCodeAt(0);
        last[charCode] = last[charCode + 26];
        last[charCode + 26] = i;
        for(let j = 26 ; j < 52 ; j++){
            let l = last[j], ll = last[j - 26];
            if(l !== -1){
                if(ll === -1){
                    ans +=  l + 1;
                }else{
                   ans += l - ll;
                    
                }
            }     
        }
    }
    return ans;
};