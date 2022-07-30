/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    const ans = [];
    const w1 = new Array(26).fill(0), w2 = new Array(26).fill(0);
    
    for(const word of words2){
        const w = new Array(26).fill(0);
        for(const char of word){
            w[char.charCodeAt(0)-'a'.charCodeAt(0)]++;
        }
        for(let i = 0 ; i<26; i++){
            w2[i] = Math.max(w2[i], w[i]);
        }
    }
    
    for(const word of words1){
        const w = new Array(26).fill(0);
        for(const char of word){
            w[char.charCodeAt(0)-'a'.charCodeAt(0)]++;
        }
        
        let isSubset = true;
        for(let i = 0 ; i<26; i++){
            if(w[i] < w2[i]){
                isSubset = false;
                break;
            }
        }
        if(isSubset){
            ans.push(word)
        }
        
    }
    
    return ans;
    
};