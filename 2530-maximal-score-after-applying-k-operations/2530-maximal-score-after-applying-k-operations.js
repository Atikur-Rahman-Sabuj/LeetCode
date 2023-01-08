/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    const pq = new MaxPriorityQueue();
    for(const num of nums){
        pq.enqueue(num);
    }
    let score = 0;
    while(k--){
        let temp = pq.dequeue().element
        score += temp;
        pq.enqueue(Math.ceil(temp / 3));
    }
    return score;
};