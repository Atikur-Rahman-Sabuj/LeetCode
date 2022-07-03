/*
 * @lc app=leetcode id=844 lang=typescript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
function backspaceCompare(s: string, t: string): boolean {
   let sH = 0,
      tH = 0,
      sL = s.length - 1,
      tL = t.length - 1;

   while (sL >= 0 || tL >= 0) {
      while (s[sL] === "#" || sH > 0) {
         if (s[sL] === "#") {
            sH++;
            sL--;
         } else {
            sH--;
            sL--;
         }
      }
      while (t[tL] === "#" || tH > 0) {
         if (t[tL] === "#") {
            tH++;
            tL--;
         } else {
            tH--;
            tL--;
         }
      }
      // console.log(sL, tL)
      if (s[sL] !== t[tL]) return false;
      sL--;
      tL--;
   }
   return true;
}
// @lc code=end
