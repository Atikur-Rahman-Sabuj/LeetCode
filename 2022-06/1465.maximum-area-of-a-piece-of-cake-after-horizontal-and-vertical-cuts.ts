/*
 * @lc app=leetcode id=1465 lang=typescript
 *
 * [1465] Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
 */

// @lc code=start
function maxArea(h: number, w: number, horizontalCuts: number[], verticalCuts: number[]): number {
   let x = 0,
      y = 0;
   horizontalCuts.sort((a, b) => a - b);
   verticalCuts.sort((a, b) => a - b);
   horizontalCuts.unshift(0);
   verticalCuts.unshift(0);
   horizontalCuts.push(h);
   verticalCuts.push(w);
   // console.log(horizontalCuts);
   // console.log(verticalCuts);
   for (let i = 1; i < horizontalCuts.length; i++) {
      x = Math.max(x, horizontalCuts[i] - horizontalCuts[i - 1]);
   }
   for (let j = 1; j < verticalCuts.length; j++) {
      y = Math.max(y, verticalCuts[j] - verticalCuts[j - 1]);
   }
   //console.log(x,y)
   return Number((BigInt(x) * BigInt(y)) % 1000000007n);
}
// @lc code=end

console.log(999999996000000000 % 1000000007);
