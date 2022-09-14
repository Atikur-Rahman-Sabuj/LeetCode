/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const pq = new MaxPriorityQueue({priority: a => a[0]});
    nums.sort((a, b) => a - b);
    let c = 1, e = nums[0];
    for(let i = 1 ; i < nums.length ; i++){
        if(nums[i] === e) c++;
        else{
            pq.enqueue([c, e]);
            c = 1;
            e = nums[i];
        }
    }
    pq.enqueue([c, e]);
    let ans = [];
    while(k--){
        ans.push(pq.dequeue().element[1]);
    }
    return ans;
};