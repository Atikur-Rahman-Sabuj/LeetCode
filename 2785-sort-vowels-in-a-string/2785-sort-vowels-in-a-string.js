/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
    const ss = s.split("");
    const vi = [];
    const vo = [];
    for(let i = 0 ; i < ss.length ; i++){
        if(vowels.includes(ss[i])){
            vi.push(i);
            vo.push(ss[i]);
        }
    }
    vo.sort();
    for(let i = 0 ; i < vi.length ; i++){
        ss[vi[i]] = vo[i];
    }
    return ss.join("");
};