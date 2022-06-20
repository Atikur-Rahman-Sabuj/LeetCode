/*
 * @lc app=leetcode id=733 lang=typescript
 *
 * [733] Flood Fill
 */

// @lc code=start
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
   const oldColor = image[sr][sc];
   if (oldColor === color) return image;
   const changeColor = (i: number, j: number) => {
      if (i < 0 || i >= image.length || j < 0 || j >= image[0].length) return;
      if (image[i][j] !== oldColor) return;
      image[i][j] = color;
      changeColor(i + 1, j);
      changeColor(i - 1, j);
      changeColor(i, j + 1);
      changeColor(i, j - 1);
   };
   changeColor(sr, sc);
   return image;
}
// @lc code=end
