/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
   let smallStartIndex = 0;
   for (let i = numbers.length - 1; i >= 0; i--) {
      for (let j = smallStartIndex; j < i; j++) {
         if (numbers[j] + numbers[i] === target) {
            return [j + 1, i + 1];
         } else if (numbers[j] + numbers[i] < target) {
            smallStartIndex = j + 1;
         } else {
            break;
         }
      }
   }
}
// @lc code=end
