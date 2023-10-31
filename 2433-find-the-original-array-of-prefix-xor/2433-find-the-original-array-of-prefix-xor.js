/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let last = 0;
    const ans = [];
    for(let i = 0 ; i < pref.length ; i++){
        ans[i] = last ^ pref[i];
        last = last ^ ans[i];
    }
    return ans;
};