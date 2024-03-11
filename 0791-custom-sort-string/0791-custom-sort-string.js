/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const m = new Map();
    for(let i = 0 ; i < order.length ; i++){
        m.set(order[i], i+1);
    }
    return s.split("").sort((a,b) => (m.get(a)??50) - (m.get(b)??50)).join("");
};