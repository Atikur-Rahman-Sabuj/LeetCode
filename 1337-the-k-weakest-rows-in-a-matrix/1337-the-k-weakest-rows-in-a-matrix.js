/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const w = [];
    mat.forEach((m,i)=>{
        w.push([i, m.filter(item=>item===1).length])
    })
    w.sort((a,b)=>a[1]-b[1]);
    const ans = [];
    for(let i = 0 ; i < k ;i++){
        ans.push(w[i][0]);
    }
    return ans;
};