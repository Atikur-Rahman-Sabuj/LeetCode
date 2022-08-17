/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const morseMap = new Map();
    let ans = 0;
    for(const word of words){
        let mc = "";
        for(const ch of word){
            mc += morseCodes[ch.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        if(!morseMap.has(mc)){
            ans++;
            morseMap.set(mc, 1);
        }
    }   
    return ans;
};