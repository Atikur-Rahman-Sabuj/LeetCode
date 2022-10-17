/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const m = new Map();
    let sum = 0;
    for(const char of sentence){
        if(!m.has(char)){
            m.set(char);
            sum++;
        }
        if(sum === 26) return true;
    }
    return false;
};