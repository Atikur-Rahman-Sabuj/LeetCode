/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const pq = new MaxPriorityQueue();
    for(const stone of stones){
        pq.enqueue(stone);
    }
    while(pq.size() > 1){
        let x = pq.dequeue().element;
        let y = pq.dequeue().element;
        if(x !== y){
            pq.enqueue(x - y);
        }
    }
    if(pq.size() == 0) return 0;
    return pq.dequeue().element;
};