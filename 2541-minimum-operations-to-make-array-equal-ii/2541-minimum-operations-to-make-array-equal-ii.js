/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var minOperations = function(n1, n2, k) {
    const n = n1.length;
    let sm = 0, bg = 0;
    for(let i = 0 ; i < n ; i++){
        if(n1[i] < n2[i]){
            let t = n2[i] - n1[i];
            if(t % k !== 0) return -1;
            sm += t / k;
        }else if(n1[i] > n2[i]){
            let t = n1[i] - n2[i];
            if(t % k !== 0) return -1;
            bg += t / k;
        }
    }
    if(sm !== bg) return -1;
    return sm;
};