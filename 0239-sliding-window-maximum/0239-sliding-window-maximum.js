/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const pq = new MaxPriorityQueue({priority: a => a[1]})
    const ans = [];
    for(let i = 0 ; i < nums.length ; i++){
        while(pq.size() > 0 && pq.front().element[0] < (i - k + 1) ){
            pq.dequeue();
        }
        pq.enqueue([i, nums[i]]);
        if (i >= k - 1) {
			ans.push(pq.front().element[1]);
		}
    }
    return ans;
};