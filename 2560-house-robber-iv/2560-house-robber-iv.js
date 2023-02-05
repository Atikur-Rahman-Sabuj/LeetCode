/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(A, k) {
    let left = 1, right = 1e9, n = A.length;
    while (left < right) {
        let mid =Math.floor( (left + right) / 2), take = 0;
        for (let i = 0; i < n; ++i)
            if (A[i] <= mid) {
                take += 1;
                i++;
            }
        if (take >= k)
            right = mid;
        else
            left = mid + 1;
    }
    return left; //left == right        
    
};