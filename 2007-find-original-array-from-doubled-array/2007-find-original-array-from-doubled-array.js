/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    const n = changed.length;
    if(n & 1) return[];
    changed.sort((a, b) => b - a);
    const m = new Map();
    const ans = [];
    for(let i = 0 ; i < n ; i++){
        let sq = changed[i] * 2;
        if(m.has(sq) && m.get(sq) >= 1){
            m.set(sq, m.get(sq) - 1);
            ans.push(changed[i]);
        }else{
            if(m.has(changed[i])){
                m.set(changed[i], m.get(changed[i]) + 1);
            }else{
                m.set(changed[i], 1);
            }
        }
    }
    return ans.length === Math.floor(n/2)? ans:[];
};