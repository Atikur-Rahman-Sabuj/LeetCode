/*
 * @lc app=leetcode id=1567 lang=typescript
 *
 * [1567] Maximum Length of Subarray With Positive Product
 */

// @lc code=start
function getMaxLen(nums: number[]): number {
   let startIndex = 0;
   let firstNegativeIndex = -1;
   let lastNegativeIndex = -1;
   let maxLen = 0;
   let totalNegative = 0;
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
         if (totalNegative & 1) {
            maxLen = Math.max(maxLen, i - firstNegativeIndex - 1, lastNegativeIndex - startIndex);
         } else {
            maxLen = Math.max(maxLen, i - startIndex);
         }
         startIndex = i + 1;
         firstNegativeIndex = -1;
         lastNegativeIndex = -1;
         totalNegative = 0;
      } else {
         if (nums[i] < 0) {
            if (firstNegativeIndex === -1) {
               firstNegativeIndex = i;
               lastNegativeIndex = i;
            }
            lastNegativeIndex = i;
            totalNegative++;
         }
      }
      console.log(startIndex, firstNegativeIndex, lastNegativeIndex, totalNegative);
   }
   if (totalNegative & 1) {
      maxLen = Math.max(maxLen, nums.length - firstNegativeIndex - 1, lastNegativeIndex - startIndex);
   } else {
      maxLen = Math.max(maxLen, nums.length - startIndex);
   }
   return maxLen;
}
// @lc code=end
