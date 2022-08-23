/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
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
      if (s[sL] !== t[tL]) return false;
       sL--;
       tL--;

    }
    return true;
};