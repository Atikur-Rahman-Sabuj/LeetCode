/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    const n = palindrome.length;
    if(n === 1) return "";
    const arr = palindrome.split("");
    const h = Math.floor(n/2);
    let f = false;
    for(let i = 0 ; i < h ; i++){
        if(arr[i] !== 'a'){
            arr[i] = 'a';
            f = true;
            break;
        }
    }
    if(!f){
        arr[n-1] = 'b';
    }
    return arr.join("");
};