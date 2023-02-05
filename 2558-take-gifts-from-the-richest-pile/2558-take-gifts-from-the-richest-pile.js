/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    const pq = new MaxPriorityQueue();
    let total = 0;
    for(const gift of gifts){
        total += gift;
        pq.enqueue(gift);
    }
    while(k--){
        let temp = pq.dequeue().element
        total -= temp;
        const sq = Math.floor(Math.sqrt(temp));
        total += sq;
        pq.enqueue(sq);
    }
    
    return total;
    
};