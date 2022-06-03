/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
function intToRoman(num: number): string {
   const map: { [key: number]: string } = {
      1: "I",
      5: "V",
      10: "X",
      50: "L",
      100: "C",
      500: "D",
      1000: "M",
      900: "CM",
      400: "CD",
      90: "XC",
      40: "XL",
      9: "IX",
      4: "IV",
   };
   let result = "";
   const divisions = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   while (num > 0) {
      for (const division of divisions) {
         let totalOccurrence = Math.floor(num / division);
         //console.log("Occu: " + totalOccurrence);
         while (totalOccurrence > 0) {
            result += map[division];
            totalOccurrence--;
         }
         num = num % division;
         //console.log("Num: " + num);
      }
   }
   return result;
}
// @lc code=end
