/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
      const checkPartial = (s1, s2) => {
      //console.log(s1, s2);
      const map = new Map();
      for (const c of s1) {
         if (map.has(c)) {
            map.set(c, map.get(c) + 1);
         } else {
            map.set(c, 1);
         }
      }
      let count = 0;
      for (const c of s2) {
         if (map.has(c)) {
            map.set(c, map.get(c) - 1);
            if (map.get(c) === 0) {
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
   for (let i = 0, j = i + s1.length; j <= s2.length; i++, j++) {
      if (checkPartial(s1, s2.substring(i, j))) {
         return true;
      }
   }
   return false;
};