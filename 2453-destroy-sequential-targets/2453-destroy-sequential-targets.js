/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
var destroyTargets = function(nums, space) {
    let res = Infinity;
    const map = {};
    let max = -Infinity
    for (const num of nums) {
        const remainder = num % space;
        if (!map[remainder]) {
          map[remainder] = 1;  
        } else {
          map[remainder]++;
        }
        if (max < map[remainder]) {
          max = map[remainder];
        }
    }
    for (const num of nums) {
        const remainder = num % space;
        if (max == map[remainder]) {
          res = Math.min(res, num);
        }
    }

    return res;
};