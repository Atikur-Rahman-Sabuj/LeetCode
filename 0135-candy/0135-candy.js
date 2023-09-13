/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let ans = 0;
    const len = ratings.length
    const candy = new Array(len).fill(1);
    const arr = new Array(len).fill(null).map((_, i) => ([ratings[i], i]));
    arr.sort((a,b) => a[0] - b[0])
    for(let i = 0 ; i < len ; i++){
        ans += findvalue(i, arr, ratings, candy);
    }
    console.log(candy)
    return ans;
};

function findvalue(i, arr, ratings, candy){
    const pos = arr[i][1];
    let c = candy[pos];
    if(pos > 0 & ratings[pos] > ratings[pos-1]){
        c = candy[pos-1] + 1;
    }
    if(pos < ratings.length-1 & ratings[pos] > ratings[pos+1]){
        c = Math.max(c, candy[pos+1] + 1);
    }
    candy[pos] = c;
    return c;
}