/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, ar) {
    const n = capacity.length;
    const em = capacity.map((c, i)=>c-rocks[i]);
    em.sort((a,b)=>a-b);
    let ans = 0;
    for(let i = 0 ; i < n ; i++){
        if(em[i] > ar)break;
        ar -= em[i];
        ans++;
    }
    return ans;
};