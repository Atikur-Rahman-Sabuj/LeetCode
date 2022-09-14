/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let len = s.length;
    const count = Array(26).fill(0);
    let start = 0,
    maxCount = 0,
    maxLength = 0;
    for (let end = 0; end < len; end++) {
      maxCount = Math.max(maxCount, ++count[s[end].charCodeAt(0) - "A".charCodeAt(0)]);
      while (end - start + 1 - maxCount > k) {
         count[s[start].charCodeAt(0) - "A".charCodeAt(0)]--;
         start++;
      }
      maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};