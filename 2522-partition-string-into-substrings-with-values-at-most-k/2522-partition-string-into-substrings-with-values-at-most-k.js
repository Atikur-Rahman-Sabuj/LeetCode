/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function(s, k) {
    const n = s.length
    const m = new Map();
    const ans = find(0, 1);
    
    if(ans === Infinity) return -1;
    return ans
    function find(i, j){
        if(m.has(mKey(i, j))) return m.get(mKey(i, j));
        if(parseInt(s.substring(i, j)) > k){
            m.set(mKey(i, j), Infinity);
            return Infinity;
        } 
        let ans = Infinity;
        if(j === n)
            ans = 1;
        else
            ans = Math.min(find(i, j+1), 1 + find(j, j+1))
        m.set(mKey(i, j), ans);
        return ans
    }
    
    function mKey(i, j){
        return i+"-"+j
    }
};