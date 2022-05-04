/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
   if (numRows === 1) {
      return s;
   }
   const rows: string[] = [];
   for (let i = 0; i < numRows; i++) {
      rows.push("");
   }
   let row = 0;
   let step = 1;
   for (let i = 0; i < s.length; i++) {
      rows[row] += s[i];
      if (row === 0) {
         step = 1;
      } else if (row === numRows - 1) {
         step = -1;
      }
      row += step;
   }
   return rows.join("");
}
// @lc code=end
