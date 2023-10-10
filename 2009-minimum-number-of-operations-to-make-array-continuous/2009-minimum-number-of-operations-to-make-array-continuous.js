/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    nums.sort(function(a, b) { return a - b; });
    let n = nums.length;
    nums = [...new Set(nums)]; 

    let ans = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        let s = nums[i];
        let e = s + n - 1;
        let idx = binarySearch(nums, e);

        ans = Math.min(ans, n - (idx - i));
    }

    return ans;
};

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}