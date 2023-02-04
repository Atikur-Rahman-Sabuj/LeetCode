/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    const check = [];
    for(const ban of banned){
        check[ban] = 1;
    }
    let sum = 0, ans = 0;
    for(let i = 1 ; i <= n  ; i++){
        if(!check[i]){
            if(sum+i <= maxSum){
                sum += i
                ans++;
            }else{
                break;
            }
        }
    }
    return ans;
};