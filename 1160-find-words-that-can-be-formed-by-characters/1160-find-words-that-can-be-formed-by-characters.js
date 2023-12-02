/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const cf = new Array(26).fill(0);
    for(const c of chars){
        cf[ci(c)]++;
    }
    let ans = 0;
    for(const word of words){
        const wf = new Array(26).fill(0);
        let isAns = true;
        for(const c of word){
            wf[ci(c)]++;
            if(wf[ci(c)] > cf[ci(c)]){
                isAns = false;
                break;
            }
        }
        if(isAns) ans += word.length;
    }
    return ans;
    
};

function ci (c){
    return c.charCodeAt(0) - 'a'.charCodeAt(0);
}