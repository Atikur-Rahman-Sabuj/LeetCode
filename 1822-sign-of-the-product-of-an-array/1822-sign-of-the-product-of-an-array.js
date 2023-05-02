/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let ans = 1;
    for(const num of nums){
        if(num === 0) return 0;
        let nC = ans === 1 ? 0 : 1;
        if(num < 0) nC++;
        if(nC & 1) ans = -1;
        else ans = 1;
    }
    return ans;
};