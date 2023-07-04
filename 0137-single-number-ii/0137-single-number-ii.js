/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ones = 0;
    let twos = 0;

    for (const num of nums) {
      ones ^= (num & ~twos);
      twos ^= (num & ~ones);
    }

    return ones;
};