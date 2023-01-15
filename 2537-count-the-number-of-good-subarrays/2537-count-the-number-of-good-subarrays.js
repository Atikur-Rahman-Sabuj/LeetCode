/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    let  res = 0, count = 0;
    const freq = new Map();
    for(let i = 0, j = 0; j < nums.length; ++j){
        //console.log(i, j)
        count += freq.get(nums[j]) || 0;
        freq.set(nums[j],(freq.get(nums[j]) || 0) + 1);

        while(count >= k){
            freq.set(nums[i],freq.get(nums[i])-1);
            k += freq.get(nums[i++]);
        }
        res += i;
        //console.log(i , j, res)
    }
    return res;
};