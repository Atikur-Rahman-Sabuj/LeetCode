/*
 * @lc app=leetcode id=557 lang=typescript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
function reverseWords(s: string): string {
   let temp = "";
   let ans = "";
   for (let i = 0; i < s.length; i++) {
      if (s[i] === " ") {
         ans += reverseString(temp) + " ";
         temp = "";
      } else {
         temp += s[i];
      }
   }
   if (temp.length > 0) {
      ans += reverseString(temp);
   }
   return ans;
   function reverseString(input: string): string {
      const s = input.split("");
      let temp = "";
      const length = s.length;
      const half = Math.floor(s.length / 2);
      for (let i = 0; i < half; i++) {
         temp = s[i];
         s[i] = s[length - i - 1];
         s[length - i - 1] = temp;
      }
      return s.join("");
   }
}
// @lc code=end
