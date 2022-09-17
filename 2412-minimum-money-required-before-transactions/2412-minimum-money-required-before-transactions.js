/**
 * @param {number[][]} A
 * @return {number}
 */
var minimumMoney = function(A) {
    let res = 0, v = 0;
    for (const a of A) {
        v = Math.max(v, Math.min(a[0], a[1]));
        res += Math.max(a[0] - a[1], 0);
    }
    return res + v;

};