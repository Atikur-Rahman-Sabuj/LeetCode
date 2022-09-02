/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let sum = 0;
    for(const num of nums){
        sum += num;
    }
    if(k === 1) return true;
    if(sum % k !== 0 ) return false;
    const part = sum / k;
    const sums = new Array(k).fill(0);
    nums.sort((a, b) => b - a)
    //console.log(part, nums)
    let totalPart = 0;

    return  findSubset(nums, 0, nums.length - 1, [], part, k);

    function findSubset( A,  sum, st,  visited,  target,  round)     {
        if (round === 0) return true;
        if (sum === target && findSubset(A, 0, A.length - 1, visited, target, round - 1))
            return true;
        for (let i = st; i >= 0; --i) {
            if (!visited[i] && sum + A[i] <= target) {
                visited[i] = true;
                if (findSubset(A, sum + A[i], i - 1, visited, target, round))
                    return true;
                visited[i] = false;
            }
        }
        return false;
    }

};