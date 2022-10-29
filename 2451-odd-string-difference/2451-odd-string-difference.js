/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    const diff = [];
    for(const word of words){
        let d = [];
        for(let i = 1 ;i < word.length ;i++){
            d[i-1] = word[i].charCodeAt(0) - word[i-1].charCodeAt(0)
        }
        diff.push(d)
    }
    if(!areArrayEqual(diff[0], diff[1])){
        if(areArrayEqual(diff[0], diff[2])){
                return words[1];
        }else{
                return words[0];
        }
    }else{
        for(let i = 2 ; i < diff.length ; i++){
            if(!areArrayEqual(diff[0], diff[i])){
                return words[i];
            }
        }
    }
    
    function areArrayEqual(a, b){
        for(let i = 0 ; i < a.length ; i++){
            if(a[i] !== b[i]) return false;
        }
        return true;
    }
};