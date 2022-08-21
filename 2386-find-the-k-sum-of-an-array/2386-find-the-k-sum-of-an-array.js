/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kSum = function(nums, k) {
    let pq = new MaxPriorityQueue(), sum = 0, n = nums.length;
    nums.sort((a,b) => Math.abs(a) - Math.abs(b));
    for(let i = 0 ; i < n ; i++){
        if(nums[i] > 0) sum += nums[i];
    }
    //console.log(sum, nums)
    pq.enqueue(0, sum);
    let q;
    while(k--){
        q = pq.dequeue();
        //console.log(q)
        if(q.element < n){
            //console.log(q.priority - Math.abs(nums[q.element]));
            //console.log(q.priority + Math.abs(nums[q.element-1]) - Math.abs(nums[q.element]));
            
            pq.enqueue(q.element+1, q.priority - Math.abs(nums[q.element]));
            if(q.element>0) pq.enqueue(q.element+1, q.priority + Math.abs(nums[q.element-1]) - Math.abs(nums[q.element]));
        }
    }
    return q.priority;
    
};