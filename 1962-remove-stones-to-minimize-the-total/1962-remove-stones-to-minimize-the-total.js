/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    const mpq = new MaxPriorityQueue();
    let total = 0;
    for(const pile of piles){
        total += pile;
        mpq.enqueue(pile);
    }
    while(k--){
        let temp =  mpq.dequeue().element;
        let remove = Math.floor(temp/2);
        total -= remove;
        mpq.enqueue(temp - remove);
    }
    return total;
};