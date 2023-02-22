/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    var left = Math.max(...weights);
    var right = weights.reduce((a,b) => a + b);
    while (left < right){
        var mid = Math.floor((left + right) / 2);
        var needed = 1;
        var current = 0;
        for(var i = 0; i < weights.length; i++){
            if(current + weights[i] > mid){
                needed ++;
                current = weights[i];
            }
            else current += weights[i];
        }
        if(needed > D) left = mid + 1;
        else right = mid;
    }
    return left;
}