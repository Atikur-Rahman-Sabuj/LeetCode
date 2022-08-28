/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    const n = nums.length;
    
    //sort the nums first becasue we need to add numbers in increasing order
    //to get longest length of sum
    nums.sort((a, b) => a - b);
    
    //create new 2d array from query to store order of the queries
    //to find the order later after sorting
    const queryArray = queries.map((a, i) => [a, i, n]);
    
    //sort the array according to query value
    queryArray.sort((a, b) => a[0] - b[0]);
    
    //now calculate some and check with each qeury value
    //and store the answe in third index of queryArray
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

    //sort queryArry again according to index to get them in order
    queryArray.sort((a, b) => a[1] - b[1]);
    
    //now return the answer
    return queryArray.map(a => a[2]);
    
};