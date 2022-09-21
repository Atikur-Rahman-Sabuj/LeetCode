/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let sum = 0;
    const ans = [];
    nums.forEach(num => {
        if(!(num & 1)){
            sum += num;
        }
    })
    for(const query of queries){
        if(!(nums[query[1]] & 1))
            sum -= nums[query[1]];
        nums[query[1]] += query[0];
        if(!(nums[query[1]] & 1))
            sum += nums[query[1]];
        ans.push(sum);
    }
    return ans;
};