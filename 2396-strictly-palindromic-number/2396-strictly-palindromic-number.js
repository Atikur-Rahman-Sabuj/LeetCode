/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    
    if(!isPalindrome(n)) return false;
    
    for(let i = 2 ; i <= 36 ; i++){
        if(!isPalindrome(ConvertBase(n, i))) return false;
    }
    
    return true;
    
    function ConvertBase (num, baseTo) {
        return num.toString(baseTo);
    };
    
    function isPalindrome(num){
        const sNum = num.toString();
        const n = sNum.length;
        for(let i = 0 ; i < Math.floor(n/2) ; i++){
            if(sNum[i] !== sNum[n-i-1]){
                return false;
            }
        }
        return true;
    }
    
};