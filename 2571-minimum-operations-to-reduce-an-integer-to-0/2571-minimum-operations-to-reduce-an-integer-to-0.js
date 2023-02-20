/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    let ans = 0;
    while(n > 0){
        let temp = 1;
        while((temp << 1) <= n){
            temp <<= 1;
        }
        let btemp = temp << 1;
        if((btemp - n) < (n - temp) ){ 
            n = btemp - n;
        }else{
            n -= temp;
        }
        //console.log(n, )
        ans++;
    }
    return ans;
};