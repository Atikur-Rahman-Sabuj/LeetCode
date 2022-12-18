/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var cycleLengthQueries = function(n, queries) {
    const ans = []
    for(const query of queries){
        let size = 0;
        let t1 = query[0].toString(2).split("");
        let t2 = query[1].toString(2).split("");
        let i = 0;
        for(; i < Math.min(t1.length, t2.length) ; i++){
            if(t1[i] !== t2[i]){
                break;
            }
        }
        size += t1.length - i + t2.length - i + 1;
        ans.push(size);
    }
    return ans;
};