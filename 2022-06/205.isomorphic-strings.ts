/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
   const mapS = new Map<string, string>();
   const mapT = new Map<string, string>();
   for (let i = 0; i < s.length; i++) {
      const _s = s[i];
      const _t = t[i];
      if (mapS.has(_s)) {
         if (mapS.get(_s) !== t[i]) {
            return false;
         }
      } else {
         mapS.set(_s, t[i]);
      }
      if (mapT.has(_t)) {
         if (mapT.get(_t) !== s[i]) {
            return false;
         }
      } else {
         mapT.set(_t, s[i]);
      }
   }
   return true;
}
// @lc code=end
