/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const ss = str1.length <= str2.length ? str1 : str2;
    const ls = str1.length > str2.length ? str1 : str2;
    const n = ss.length, m = ls.length;
    let ans = -1;
    for(let i = n-1 ; i >= 0 ; i--){
        if(validate(i)){
            ans = i;
            break;
        }
    }
    
    return ans === -1 ? "": ss.substring(0, ans+1);
    
    function validate(end){
        let len = end + 1;
        if(n % len !== 0 || m % len !== 0) return false;
        let temp = end+1;
        for(let i = temp ; i < n ; i++){
            if(ss[i] !== ss[temp % len]) return false;
            temp++;
        }
        temp = 0;
        for(let i = 0 ; i < m ; i++){
            if(ls[i] !== ss[temp++ % len]) return false;
        }
        return true;
    }
};