/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    const setArray = [], n = words.length;
    for(let i = 0 ; i < n ; i++){
        setArray[i] = new Set(words[i].split(""));
    }
    let ans = 0;
    for(let i = 0 ; i < n-1 ; i++){
        for(let j = i+1 ; j < n ; j++){
            if(isSetEqual(setArray[i], setArray[j])) ans++;
        }
    }
    return ans;
};

function isSetEqual(s1, s2){
    if(s1.size !== s2.size) return false;
    for(const s1Val of s1.values()){
        if(!s2.has(s1Val)) return false;
    }
    return true;
}