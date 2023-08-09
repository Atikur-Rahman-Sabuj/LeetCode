/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    if (p === 0) return 0;
    let n = nums.length - 1;
    nums.sort((a, b) => a - b);
    let low = 0,
    high = nums[n] - nums[0];

    while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (isValid(mid)) high = mid;
    else low = mid + 1;
    }
    return low;

    function isValid(max) {
    let i = 1,
      pairs = 0;

    while (i <= n) {
      if (nums[i] - nums[i - 1] <= max) {
        pairs++;
        i = i + 2;
      } else {
        i++;
      }
      if (pairs == p) return true;
    }
    return false;
    }
};