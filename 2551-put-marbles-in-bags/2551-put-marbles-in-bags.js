/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
        let n = weights.length - 1;
        const B = new Array(n);
        let res = 0;
        for (let i = 0; i < B.length; i++) {
            B[i] = weights[i] + weights[i + 1];
        }
        B.sort((a,b)=>a-b)
        for (let i = 0; i < k - 1; i++) {
            res += B[n - 1 - i] - B[i];
        }
        return res;
};