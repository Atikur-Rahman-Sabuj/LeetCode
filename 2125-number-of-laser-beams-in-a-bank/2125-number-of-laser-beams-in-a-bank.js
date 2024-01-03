/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let ans = 0, prevCount = 0;
    for(let i = 0 ; i < bank.length ; i++){
        let count = 0;
        for(let j = 0 ; j < bank[i].length ; j++){
            if(bank[i][j] == '1')count++;
        }
        if(count == 0) continue;
        ans += count * prevCount
        prevCount = count;
    }
    return ans;
};