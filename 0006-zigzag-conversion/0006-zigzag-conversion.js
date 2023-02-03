/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
      return s;
   }
   const rows = [];
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
};