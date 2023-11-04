/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
    let ans = 0;
    for(const d of left){
        ans = Math.max(ans, d)
    }
    for(const d of right){
        ans = Math.max(ans, n - d);
    }
    return ans;
};