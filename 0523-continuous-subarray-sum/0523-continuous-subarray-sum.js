/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const m = new Map();
    m.set(0, -1);
    let prevSum = nums[0] % k;
    let newSum = nums[0] % k;
    for(let i = 1 ; i < nums.length ; i++){
        newSum += + nums[i]
        newSum = newSum % k;
        if(m.has(newSum) && i - m.get(newSum)>1){
            return true;
        }else{
            m.set(prevSum, i-1);
            prevSum = newSum;
        }
    }
    return false;
};