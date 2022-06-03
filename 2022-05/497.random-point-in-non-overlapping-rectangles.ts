/*
 * @lc app=leetcode id=497 lang=typescript
 *
 * [497] Random Point in Non-overlapping Rectangles
 */

// @lc code=start
class Solution {
   rects;
   length;
   r = 0;
   a = 0;
   b = 0;
   constructor(rects: number[][]) {
      this.rects = rects;
      this.length = rects.length;
      this.a = rects[0][0] - 1;
      this.b = rects[0][1];
   }

   pick(): number[] {
      let rect = this.rects[this.r];
      this.a++;
      if (this.a > rect[2]) {
         this.a = rect[0];
         this.b++;
      }
      if (this.b > rect[3]) {
         this.r++;
         if (this.r == this.length) {
            this.r = 0;
         }
         this.a = this.rects[this.r][0] - 1;
         this.b = this.rects[this.r][1];
         return this.pick();
      }
      return [this.a, this.b];
   }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
// @lc code=end
