/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let ans = fruits.length > 1? 2 : 1, b1 = fruits[0], b2 = fruits[1], s = -1;
    for(let i = 2 ; i < fruits.length ; i++){
        if(b1 === b2) b2 = fruits[i];
        if(fruits[i] === b1 || fruits[i] === b2){
            ans = Math.max(ans, i - s)
        }else{
            b1 = fruits[i-1]; b2 = fruits[i];
            s = i;
            while(s >= 0 && (fruits[s] === b1 || fruits[s] === b2)){
                  s--;
            }
        }
    }
    return ans;
}; 