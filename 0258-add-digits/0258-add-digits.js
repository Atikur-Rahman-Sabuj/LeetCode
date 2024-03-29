/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // O(1) solution
    return 1 + (num - 1) % 9;
    
    //loop solution
    // while(num > 9){
    //     let temp = 0;
    //     while(num > 0){
    //         temp += num % 10;
    //         num = ~~(num / 10);
    //     }
    //     num = temp;
    // }
    // return num;
};