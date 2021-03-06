/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
function trap(height: number[]): number {
   let left = 0;
   let right = height.length - 1;
   let leftMax = 0;
   let rightMax = 0;
   let result = 0;
   while (left < right) {
      if (height[left] < height[right]) {
         if (height[left] >= leftMax) {
            leftMax = height[left];
         } else {
            result += leftMax - height[left];
         }
         left++;
      } else {
         if (height[right] >= rightMax) {
            rightMax = height[right];
         } else {
            result += rightMax - height[right];
         }
         right--;
      }
   }
   return result;
}
// @lc code=end
