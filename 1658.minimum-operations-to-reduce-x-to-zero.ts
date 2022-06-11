/*
 * @lc app=leetcode id=1658 lang=typescript
 *
 * [1658] Minimum Operations to Reduce X to Zero
 */

// @lc code=start
function minOperations(nums: number[], x: number): number {
   const totalsSum = nums.reduce((acc, cur) => acc + cur, 0);
   if (x > totalsSum) return -1;
   const remainingSum = totalsSum - x;
   //console.log(totalsSum, remainingSum)
   let sum = 0,
      maxSequence = -1,
      startIndex = 0;
   for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      //console.log(sum);

      while (sum > remainingSum) {
         sum -= nums[startIndex];
         startIndex++;
      }
      if (sum === remainingSum) {
         maxSequence = Math.max(maxSequence, i - startIndex + 1);
      }
   }
   return maxSequence === -1 ? -1 : nums.length - maxSequence;
}

// @lc code=end

//Brute force approach with recursion
//Gets timelimit
//    const len = nums.length;
//    const e = len - 1;
//    function calculateOperation(startIndex: number, endIndex: number, target: number): number {
//       if (startIndex > endIndex) {
//          return -1;
//       }
//       if (nums[startIndex] === target || nums[endIndex] === target) {
//          return len - endIndex + startIndex;
//       }
//       if (nums[startIndex] > target) {
//          if (nums[endIndex] > target) {
//             return Number.MAX_SAFE_INTEGER;
//          } else {
//             return calculateOperation(startIndex, endIndex - 1, target - nums[endIndex]);
//          }
//       }
//       if (nums[endIndex] > target) {
//          return calculateOperation(startIndex + 1, endIndex, target - nums[startIndex]);
//       }
//       return Math.min(
//          calculateOperation(startIndex + 1, endIndex, target - nums[startIndex]),
//          calculateOperation(startIndex, endIndex - 1, target - nums[endIndex])
//       );
//    }
//    const result = calculateOperation(0, e, x);
//    return result === Number.MAX_SAFE_INTEGER ? -1 : result;
