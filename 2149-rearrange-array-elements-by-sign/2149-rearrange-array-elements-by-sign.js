/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const ans = [], odd = [], even = [];
    let isEven = true;
    for(const num of nums){
        if(num < 0) odd.push(num);
        else even.push(num);
    }
    const len = even.length;
    for(let i = 0 ; i < len ; i++){
        nums[2*i] = even[i];
        nums[2*i + 1] = odd[i];
    }
    return nums;
};