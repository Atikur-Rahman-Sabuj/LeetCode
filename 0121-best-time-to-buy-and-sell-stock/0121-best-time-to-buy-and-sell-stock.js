/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let minPrice = prices[0];
    for(const price of prices){
        profit = Math.max(profit, price-minPrice);
        minPrice = Math.min(minPrice, price);
    }
    return profit;
};