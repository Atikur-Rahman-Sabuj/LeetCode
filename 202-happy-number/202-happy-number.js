/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const calculateSquareSum = (n) => {
        let sum = 0;
        while(n){
            sum += (n%10) ** 2;
            n = Math.floor(n/10);
        }
        //console.log(sum)
        return sum;
    }
    let slow = n, fast = n;
    do{
        slow = calculateSquareSum(slow);
        fast = calculateSquareSum(fast);
        fast = calculateSquareSum(fast);
    }while(slow !== fast)
    if(slow === 1) return true;
    return false;
};