/*
 * @lc app=leetcode id=1385 lang=typescript
 *
 * [1385] Find the Distance Value Between Two Arrays
 */

// @lc code=start
function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
   let count = 0;
   for (let i = 0; i < arr1.length; i++) {
      let flag = true;
      for (let j = 0; j < arr2.length; j++) {
         if (Math.abs(arr1[i] - arr2[j]) <= d) {
            flag = false;
            break;
         }
      }
      if (flag) {
         count++;
      }
   }
   return count;
}
// @lc code=end
