/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = ["a", "e", "i", "o", "u"];
    let countV = 0, ans = 0;
    for(let j = 0, i = 0 ; i < s.length ; i++){
        if(vowels.includes(s[i])){
            countV++
        }
        if((i - j + 1) > k){
            if(vowels.includes(s[j])){
                countV--
            }
            j++
        }
        ans = Math.max(ans, countV)
    }
    return ans;
};