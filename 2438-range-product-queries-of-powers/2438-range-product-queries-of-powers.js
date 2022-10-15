/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
    const powers = [];
    while(n > 0){
        let v = 1;
        while(v <= n){
            v = v << 1;
        }
        v = v >> 1;
        n = n - v;
        powers.unshift(v)
    }
    const m = [];
    let mul = 1n;
    for(let i = 0; i < powers.length ; i++){
        mul = (mul * BigInt(powers[i]))
        m[i] = mul;
    }
    const ans = [];
    for(let i = 0 ; i < queries.length ; i++){
        ans[i] = parseInt(m[queries[i][1]]/(queries[i][0] === 0 ? BigInt(1): m[(queries[i][0])-1])) % (1e9+7)
    }
    return ans;
};