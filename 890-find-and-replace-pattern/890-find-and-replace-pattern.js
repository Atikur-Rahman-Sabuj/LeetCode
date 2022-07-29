/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    const matchPattern = (word, p) => {
        const m = new Map();
        const ch = [];
        if(word.length !== p.length) return false;
        for(let i = 0 ; i < p.length ; i++){

            if(m.has(p[i])){
                //console.log(m)
                if(m.get(p[i]) !== word[i]){
                    return false;
                }
            }else{
                if(ch[ word[i].charCodeAt(0) - 'a'.charCodeAt(0) ] === 1){
                    return false;
                }else{
                    m.set(p[i], word[i]);
                    ch[ word[i].charCodeAt(0) - 'a'.charCodeAt(0) ] = 1;
                }
                
            }
        }
        return true;
    }
    let ans = [];
    for(w of words){
        if(matchPattern(w, pattern)){
            ans.push(w);
        }
    }
    return ans;
};