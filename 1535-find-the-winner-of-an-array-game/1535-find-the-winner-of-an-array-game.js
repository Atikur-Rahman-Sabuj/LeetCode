/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    let kk = 0, cn = arr[0];
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] > cn){
            cn = arr[i];
            kk = 1;
        }else{
            kk++;
        }
        if(kk === k) return cn;
    }
    return cn;
};