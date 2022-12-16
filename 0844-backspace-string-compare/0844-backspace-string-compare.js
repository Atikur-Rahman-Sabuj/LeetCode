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
      // take sL to a point where the character will stay(not backspaced by #) for s
      while (s[sL] === "#" || sH > 0) {
         if (s[sL] === "#") {
            sH++;
            sL--;
         } else {
            sH--;
            sL--;
         }
      }
      // take tL to a point where the character will stay for t
      while (t[tL] === "#" || tH > 0) {
         if (t[tL] === "#") {
            tH++;
            tL--;
         } else {
            tH--;
            tL--;
         }
      }
      // check characters at that point, if not equal return false
      if (s[sL] !== t[tL]) return false;
      // if equal go to the next characters
       sL--;
       tL--;

    }
    // all matched, return true
    return true;
};