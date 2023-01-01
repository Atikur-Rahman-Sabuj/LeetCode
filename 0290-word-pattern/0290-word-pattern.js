/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if(words.length !== pattern.length) return false;
    const m = new Map();
    const m1 = new Map();
    for(let i = 0 ; i < words.length ; i++){
        //console.log(i)
        if(m.has(pattern[i])){
            if(words[i] !== m.get(pattern[i])) return false;
        }else{
            if(m1.has(words[i])) return false;
            m.set(pattern[i], words[i]);
            m1.set(words[i], pattern[i]);
        }
    }
    //console.log(m,m1)
    return true
};