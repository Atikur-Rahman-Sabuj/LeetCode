/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sum = 0;
    let min = Infinity, max = -Infinity;
    for(const sal of salary){
        sum += sal
        min = Math.min(min, sal)
        max = Math.max(max, sal)
    }
    return (sum - min - max) / (salary.length - 2)
};