/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let nCount = 0;
    for(const num of nums){
        if(num === 0) return 0;
        if(num < 0) nCount++;
    }
    return nCount & 1 ? -1 : 1;
};