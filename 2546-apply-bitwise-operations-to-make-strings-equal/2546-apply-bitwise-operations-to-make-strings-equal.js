/**
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */
var makeStringsEqual = function(s, t) {
    if(s === t) return true;
    let sz = 0, tz = 0;
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === '0')sz++;
        if(t[i] === '0')tz++;
    }
    return sz !== s.length && tz !== t.length;
    
};

//11 -> 01 || 10
//00 -> 00
//01 -> 11 ->10
//10 -> 11

///111 -> 011 -> 001

//0001 -> 1111
///0001 -> 1111
///1110 -> 1111