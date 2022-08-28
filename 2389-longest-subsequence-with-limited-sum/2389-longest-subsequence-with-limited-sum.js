/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    const queryArray = queries.map((a, i) => [a, i, n]);
    queryArray.sort((a, b) => a[0] - b[0]);
    let ansI = 0;
    let sum = 0;
    for(let i = 0 ; i < n ; i++){
        sum += nums[i];
        while(sum > queryArray[ansI][0]){
            queryArray[ansI][2] = i;
            ansI++;
            if(ansI >= queries.length) break;
        }
        if(ansI >= queries.length) break;
    }
    //console.log(queryArray);
    queryArray.sort((a, b) => a[1] - b[1]);
    
    return queryArray.map(a => a[2]);
    
};