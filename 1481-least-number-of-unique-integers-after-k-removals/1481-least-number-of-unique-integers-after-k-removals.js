/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const m = new Map();
    for(const num of arr){
        if(m.has(num)){
            m.set(num, m.get(num) + 1);
        }else{
            m.set(num, 1);
        }
    }
    const sarr = [];
    m.forEach((freq, num) => {
        sarr.push([freq, num])
    })
    sarr.sort((a,b) => a[0] - b[0]);
    let count = 0;
    for(let i = 0 ; i < sarr.length ; i++){
        count += sarr[i][0];
        if(count > k){
            return sarr.length - i;
        }
    }
    return 0
};