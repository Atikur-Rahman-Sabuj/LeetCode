/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function(price, k) {
    const n = price.length;
    price.sort((a,b)=>a-b)
    let L = 0, R = price[n-1] - price[0];
    while(L < R){
        let M =  Math.floor((L + R + 1)/2), cnt = 1
        for(let i = 1, j = 0 ; i < n ; i++){
            if(price[i] - price[j] >= M){
                cnt++;
                j = i;
            }
        }
        if(cnt >= k){
            L = M
        }else{
            R = M-1
        }
        
    }
    return L
};