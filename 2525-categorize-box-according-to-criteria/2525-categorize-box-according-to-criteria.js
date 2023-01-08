/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    const volume = length * width * height;
    const isBulky = length >= 10000 || width >= 10000 || height >= 10000 || volume >= 1000000000;
    const isHeavy = mass >= 100
    if(isBulky && isHeavy) return "Both"
    if(isBulky) return "Bulky"
    if(isHeavy) return "Heavy"
    return "Neither"
};