/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < firstList.length && j < secondList.length) {
        const [firstStart, firstEnd] = firstList[i];
        const [secondStart, secondEnd] = secondList[j];
        const start = Math.max(firstStart, secondStart);
        const end = Math.min(firstEnd, secondEnd);
        if (start <= end) {
         result.push([start, end]);
        }
        if (firstEnd < secondEnd) {
         i++;
        } else {
         j++;
        }
    }
    return result;
};