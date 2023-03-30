const _isScramble = function (s1, s2, trackMap) {    
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;
    if (s1.length === 0 || s2.length === 0) return true;
    const trackKey = s1 + s2;
    if (trackKey in trackMap) return !!trackMap[trackKey];

    let result = false;
    let xorFW = 0;
    let xorBW = 0;

    for (var i = 0, j = s1.length - 1, iPlus = 1; i < s1.length - 1; i++, j--, iPlus++) {
        xorFW ^= s1.charCodeAt(i) ^ s2.charCodeAt(i);
        xorBW ^= s1.charCodeAt(i) ^ s2.charCodeAt(j);

        if (xorFW === 0 &&
            _isScramble(s1.substring(0, iPlus), s2.substring(0, iPlus), trackMap) &&
            _isScramble(s1.substring(iPlus), s2.substring(iPlus), trackMap)) {
            result = true;
            break;
        }

        if (xorBW === 0 &&
            _isScramble(s1.substring(0, iPlus), s2.substring(s1.length - iPlus), trackMap) &&
            _isScramble(s1.substring(iPlus), s2.substring(0, s1.length - iPlus), trackMap)) {
            result = true;
            break;
        }
    }

    trackMap[trackKey] = result;
    trackMap[s2 + s1] = result;
    return result;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isScramble = function (s1, s2) {
    return _isScramble(s1, s2, {});
};