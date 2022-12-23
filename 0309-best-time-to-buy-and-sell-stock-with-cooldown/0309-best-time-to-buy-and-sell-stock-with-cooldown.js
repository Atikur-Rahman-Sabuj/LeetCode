/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let own = 0,
      notOwn = 0,
      ownLast = -prices[0],
      notOwnLast = 0,
      notOwnLast2 = 0;
    for (let i = 1; i < prices.length; i++) {
      own = Math.max(ownLast, notOwnLast2 - prices[i]);
      notOwn = Math.max(notOwnLast, ownLast + prices[i]);
       console.log(own, notOwn)
      notOwnLast2 = notOwnLast;
      notOwnLast = notOwn;
      ownLast = own;
    }
    return notOwnLast;
};