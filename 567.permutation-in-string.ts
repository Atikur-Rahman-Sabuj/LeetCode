/*
 * @lc app=leetcode id=567 lang=typescript
 *
 * [567] Permutation in String
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
   const checkPartial = (s1: string, s2: string): boolean => {
      const map = new Map<string, number>();
      for (const c of s1) {
         if (map.has(c)) {
            map.set(c, map.get(c)! + 1);
         } else {
            map.set(c, 1);
         }
      }
      let count = 0;
      for (const c of s2) {
         if (map.has(c)) {
            map.set(c, map.get(c)! - 1);
            if (map.get(c)! === 0) {
               map.delete(c);
            }
            count++;
         } else {
            count--;
         }
         if (count === s1.length) {
            return true;
         }
      }
      return false;
   };
   for (let i = 0, j = i + s1.length; i < s2.length - s1.length + 1; i++, j++) {
      if (checkPartial(s1, s2.substring(i, j))) {
         return true;
      }
   }
   return false;
}
// @lc code=end
