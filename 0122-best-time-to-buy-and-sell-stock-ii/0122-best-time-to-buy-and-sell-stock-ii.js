/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
        let own = -prices[0], notOwn = 0,ans = 0;
    for(let i = 1 ; i < prices.length ; i++){
        let prevOwn = own, prvNotOwn = notOwn;
        
        own = Math.max(prevOwn, prvNotOwn - prices[i]);
        notOwn = Math.max(prvNotOwn, prevOwn + prices[i]);

        ans = Math.max(ans, notOwn);
    }
    return ans;
};