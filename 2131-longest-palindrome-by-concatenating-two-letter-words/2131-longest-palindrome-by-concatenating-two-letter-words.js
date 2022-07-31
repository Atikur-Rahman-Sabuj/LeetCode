/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    const m = new Map();
    let ans = 0;
    for(word of words){
        const temp = word[1]+word[0];
        if(m.has(temp) && m.get(temp) > 0){
            ans += 4;
            m.set(temp, m.get(temp) - 1);
        }else{
            m.set(word, m.has(word)?m.get(word)+1:1);
        }
    }
    for(word of m.keys()){
        if (word[0] === word[1] && m.get(word)>0 ){
            ans += 2;
            break;
        }
    }
    return ans;
};