/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let i = num.length - 1;
    let c = 0;
    while(i >= 0 || k > 0 || c > 0){
       // console.log(k%10, num[i], c, i)
        let temp = k%10 + (num[i]??0) + c;
        //console.log( temp)
        k = Math.floor(k/10)
        if(i >= 0)
            num[i] = temp%10
        else{
            num.unshift(temp%10);
        }
        c = Math.floor(temp / 10)
        i--;
    }
    return num;
};