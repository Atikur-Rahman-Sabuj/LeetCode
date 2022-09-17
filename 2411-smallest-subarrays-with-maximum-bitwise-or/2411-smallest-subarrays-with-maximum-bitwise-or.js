/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(A) {
    let n = A.length, last = new Array(30).fill(0), res = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; --i) {
        res[i] = 1;
        for (let j = 0; j < 30; ++j) {
            if ((A[i] & (1 << j)) > 0)
                last[j] = i;
            res[i] = Math.max(res[i], last[j] - i + 1);
        }
    }
    return res;
};