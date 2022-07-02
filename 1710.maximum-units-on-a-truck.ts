/*
 * @lc app=leetcode id=1710 lang=typescript
 *
 * [1710] Maximum Units on a Truck
 */

// @lc code=start
function maximumUnits(boxTypes: number[][], truckSize: number): number {
   boxTypes.sort((a, b) => b[1] - a[1]);
   let ans = 0;
   for (const boxType of boxTypes) {
      const total = boxType[0] * boxType[1];
      if (truckSize <= boxType[0]) {
         ans += truckSize * boxType[1];
         break;
      } else {
         ans += total;
         truckSize -= boxType[0];
      }
      console.log(ans, truckSize);
   }
   return ans;
}
// @lc code=end
