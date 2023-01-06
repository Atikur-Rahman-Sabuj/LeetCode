/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b)=>a-b)
    let ans = 0
    for(let i = 0 ; i < costs.length && coins > 0 ; i++){
        if(coins >= costs[i]){
            ans++;
            coins = coins - costs[i];
        }else{
            break;
        }
    }
    return ans;
};