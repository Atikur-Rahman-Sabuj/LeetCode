/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let min1 = 101, min2 = 101;
    for(const num of prices){
        if(num <= min1){
            min2 = min1;
            min1 = num;
        }
        else if(num < min2){
            min2 = num;
        }
    }
    return (min1 + min2) > money ? money : money - (min1 + min2);
};