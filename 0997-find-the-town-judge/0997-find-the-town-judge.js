/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const arr = new Array(n+1).fill(0);
    const arr2 = new Array(n+1).fill(0);
    for(const t of trust){
        arr[t[0]]++;
        arr2[t[1]]++;
    }
    for(let i = 1; i <= n ; i++){
        if(arr2[i] === n-1 && arr[i] === 0)
            return i;
    }
    return -1;
};