/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let temp = names.map((n, i)=>[n, heights[i]]);
    temp.sort((a,b)=>b[1]-a[1]);
    return temp.map(a=>a[0]);
};