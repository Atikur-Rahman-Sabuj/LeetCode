/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    const arr  = [[0,1], [1,0]];
    function find(kk){
       if(kk === 1) return 0;
        const i = Math.ceil(kk/2);
        const j = (kk+1)%2;
        return arr[find(i)][j];
    }
    return find(k);
    
};

// 0
// 01
// 01 10
// 01 10 10 01
// 01 10 10 01 10 01 01 10
// 0110 1001 1001 0110 1001 0110 0110 1001
// 1001 0110