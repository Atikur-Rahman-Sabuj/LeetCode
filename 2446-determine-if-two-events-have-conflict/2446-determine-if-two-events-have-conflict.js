/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    const es1 = parseInt(event1[0][0]+event1[0][1]) * 60 + parseInt(event1[0][3]+event1[0][4])
    const ee1 = parseInt(event1[1][0]+event1[1][1]) * 60 + parseInt(event1[1][3]+event1[1][4])
    const es2 = parseInt(event2[0][0]+event2[0][1]) * 60 + parseInt(event2[0][3]+event2[0][4])
    const ee2 = parseInt(event2[1][0]+event2[1][1]) * 60 + parseInt(event2[1][3]+event2[1][4])
    if(es2  > ee1 || es1 > ee2) return false;
    return true;
};