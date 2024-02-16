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
    const farr = [];
    m.forEach((freq, num) => {
        farr.push(freq)
    })
    farr.sort((a,b) => a - b);
    let count = 0;
    for(let i = 0 ; i < farr.length ; i++){
        count += farr[i];
        if(count > k){
            return farr.length - i;
        }
    }
    return 0
};