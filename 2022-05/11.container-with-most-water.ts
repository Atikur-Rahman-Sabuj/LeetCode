/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
   let max = 0;
   let left = 0;
   let right = height.length - 1;
   while (left < right) {
      const area = Math.min(height[left], height[right]) * (right - left);
      max = Math.max(max, area);
      if (height[left] < height[right]) {
         left++;
      } else {
         right--;
      }
   }
   return max;
}
// @lc code=end
