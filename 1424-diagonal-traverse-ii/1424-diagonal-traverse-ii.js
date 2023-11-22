/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    const n = nums.length;
    const pa = [];
    for(let i = n-1 ; i >= 0  ; i--){
        for(let j = nums[i].length - 1 ; j >= 0 ; j--){
            if(pa[i+j] == undefined)
                pa[i+j] = [];
            pa[i+j].push(nums[i][j]);
        }
    }
    return pa.flat();
};