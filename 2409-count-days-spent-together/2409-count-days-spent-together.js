/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(aA, lA, aB, lB) {
    const months = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    const alice = [ months[parseInt(aA.substring(0,2))] + parseInt(aA.substring(3)), months[parseInt(lA.substring(0,2))]+ parseInt(lA.substring(3)) ]
    const bob = [ months[parseInt(aB.substring(0,2))] + parseInt(aB.substring(3)),months[parseInt(lB.substring(0,2))]+ parseInt(lB.substring(3)) ]
    let start = alice[0] < bob[0] ?bob[0] : alice[0];
    let end = alice[1] > bob[1] ?bob[1] : alice[1];
    if(end < start) return 0;
    else return end - start + 1;
};