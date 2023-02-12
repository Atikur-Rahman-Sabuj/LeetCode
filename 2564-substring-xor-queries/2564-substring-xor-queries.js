/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */
var substringXorQueries = function(s, queries) {
    const ans = [];
    for(const query of queries){
        const val = (query[0] ^ query[1]).toString(2);
        const left = s.indexOf(val);
        if(left === -1){
            ans.push([-1, -1])
        }else{
            ans.push([left, left+val.length-1])
        }
    }
    return ans;
};