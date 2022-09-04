/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    const start = new Array(26).fill(-1);
    const end = new Array(26).fill(-1);
    for(let i = 0 ; i < s.length ; i++){
       let index = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if(start[index] === -1){
            start[index] = i;
        }else{
            end[index] = i;
        }
    }
    for(let i = 0 ; i < 26 ; i++){
        if(start[i] !== -1){
            if((end[i] - start[i] - 1) !== distance[i]) return false;
        }
    }
    return true;
};