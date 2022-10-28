/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const m = new Map();
    for(const str of strs){
        let sortedStr = [...str].sort((a, b) => a.localeCompare(b)).join("")
        if(m.has(sortedStr)){
            m.get(sortedStr).push(str);
        }else{
            m.set(sortedStr, [str]);
        }
    }
    return [...m.values()];
};