/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let i = 0, s = 1, m = 0;
    while(m < k){
        if(arr[i] === s){
            s++; i++;
        }else{
            m++; s++;
        }
    }
    return s - 1;
};