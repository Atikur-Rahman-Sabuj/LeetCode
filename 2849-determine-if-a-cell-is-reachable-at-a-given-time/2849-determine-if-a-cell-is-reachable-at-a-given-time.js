/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    const dx = Math.abs(sx-fx), dy = Math.abs(sy-fy);
    const maxd = Math.max(dx, dy)
    if(maxd === 0 && t === 1) return false;
    return t >= maxd
};