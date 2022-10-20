/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const map = {
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
      }
   }
   return result;
};