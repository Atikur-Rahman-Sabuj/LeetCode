/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const m = new Map();
    for(const word of words){
        m.set(word, m.has(word) ? m.get(word) + 1 : 1);
    }
    const arr = [...m.entries()].sort((a,b)=>b[1] - a[1] || ( a[0] > b[0]?1:-1));
    
    return arr.slice(0,k).map(a=>a[0]);
};