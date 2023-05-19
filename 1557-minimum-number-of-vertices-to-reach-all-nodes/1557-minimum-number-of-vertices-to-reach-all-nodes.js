/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const a = new Array(n).fill(0);
    for(const [, d] of edges){
        a[d]++;
    }
    const ans = [];
    for(let i = 0 ; i < n ; i++){
        if(a[i] === 0){
            ans.push(i);
        }
    }
    return ans;
};