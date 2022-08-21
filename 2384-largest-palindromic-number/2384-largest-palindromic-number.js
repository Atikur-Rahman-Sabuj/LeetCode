/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function(num) {
    const freq = new Array(10).fill(0);
    let middle = "";
    let ans1 = "";
    
    for(const char of num){
        freq[char.charCodeAt(0) - '0'.charCodeAt(0)]++;
    }
    
    for(let i = 9; i >= 1 ; i--){
        while(freq[i] > 1){
            ans1 += i;
            freq[i] -= 2;
        }
        if(freq[i] > 0 && middle.length === 0){
            middle += i;
        }
    }
    
    if(ans1.length > 0){
        while(freq[0] > 1){
            ans1 += 0;
            freq[0] -= 2;
        }
    }
    
    if(freq[0] > 0 && middle.length === 0){
        middle += 0;
    }
    
    return ans1 + middle + [...ans1].reverse().join("");
};