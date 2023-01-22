/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCost = function(nums, k) {
  let n = nums.length, memo = Array(n).fill(-1);
  return dp(0);
  
  function dp(i) {
    if (i === n) return 0;
    if (memo[i] !== -1) return memo[i];
    
    let ans = Infinity, count = new Map(), uniqueCount = 0;
    for (let j = i; j < n; j++) {
      let currCount = count.get(nums[j]) || 0;
      if (currCount === 0) {
        uniqueCount++;
      } else if (currCount === 1) {
        uniqueCount--;
      }
      count.set(nums[j], currCount + 1);
      let nonUnique = (j - i + 1) - uniqueCount;
      let cost = k + nonUnique;
      ans = Math.min(ans, cost + dp(j + 1));
    }
    return memo[i] = ans;
  } 
};


//nums = [1,2,1,1,2], k = 2
//[1,1]
//[1]
//[1]

//nums = [1,2,1,2,1,3,3], k = 2
// [1]
//