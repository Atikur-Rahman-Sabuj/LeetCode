/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const v = [0];
    const vowels = "aeiou"
    for(let i = 1 ; i <= words.length ; i++){
        if(isVowel(words[i-1])){
            v[i] = v[i-1] + 1
        }else{
            v[i] = v[i-1]
        }
    }
    
    const ans = [];
    
    for(const query of queries){
        ans.push(v[query[1]+1] - v[query[0]]);
    }
    
    return ans;

    
    function isVowel(s){
        return vowels.includes(s[0]) && vowels.includes(s[s.length - 1])
    }
};

