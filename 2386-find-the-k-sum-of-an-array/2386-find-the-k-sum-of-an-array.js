/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kSum = function(nums, k) {
    let pq = new MaxPriorityQueue(), sum = 0, n = nums.length;
    
    //sort numbers in ascending order with absolute value
    nums.sort((a,b) => Math.abs(a) - Math.abs(b));
    
    //calculate sum of positive integers
    for(let i = 0 ; i < n ; i++){
        if(nums[i] > 0) sum += nums[i];
    }
    
    //we have the biggest possible sum , now we just substract abs values of nums to get smaller ones
    //this satisfies because
    //for positive numbers we are removing them from subsequence and getting smaller sum
    //for negetive numbers we are adding them to subsequence and getting smaller sum

    //to get all possible combinations in decreasing order we will start from zero index,
    //for current index we will subtract abs(nums[index]) from the current sum
    //and we will subtract abs(nums[index]) and add(nums[index-1]) from the current sum           //because we know the previous number was not in the current sum as we subtracting the         //current sum every time we increasing index
    
    //we go like this untill we get the kth sum
    
    pq.enqueue(0, sum);
    let q;
    while(k--){
        q = pq.dequeue();
        if(q.element < n){
            pq.enqueue(q.element+1, q.priority - Math.abs(nums[q.element]));
            if(q.element>0) pq.enqueue(q.element+1, q.priority + Math.abs(nums[q.element-1]) - Math.abs(nums[q.element]));
        }
    }
    return q.priority;
};