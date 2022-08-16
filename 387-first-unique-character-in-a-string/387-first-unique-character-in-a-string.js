/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
         map.set(s[i], -1);
      } else {
         map.set(s[i], i);
      }
    }
    let min = Number.MAX_SAFE_INTEGER;
    for (const [key, value] of map.entries()) {
      if (value !== -1) {
         min = Math.min(min, value);
      }
    }
    return min === Number.MAX_SAFE_INTEGER ? -1 : min;
};