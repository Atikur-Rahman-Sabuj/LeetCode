/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const m = new Map();
    
    for(let i = 0; i < order.length ; i++){
        m.set(order[i], i+1);
    }
    
    const n = words.length;

    for(let i = 1 ; i < n ; i++){
        let l = Math.max(words[i].length, words[i-1].length)
        for(let j = 0 ; j < l; j++){
            if( (m.get(words[i][j]) || -1)  > (m.get(words[i-1][j]) || -1 ) ){
                break;
            }else if( (m.get(words[i][j])|| -1)  < (m.get(words[i-1][j])|| -1) ){
                return false;
            }
        }
    }

    
    return true;
};