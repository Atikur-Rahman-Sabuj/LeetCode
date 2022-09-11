/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    const pq = new MinPriorityQueue({priority: a => a})
    intervals.sort((a, b) => a[0] - b[0]);
    pq.enqueue(intervals[0][1]);
    for(let i = 1 ; i<intervals.length ; i++){
        let front = pq.front().element;
        if(front < intervals[i][0]){
            pq.dequeue();
        }
        pq.enqueue(intervals[i][1]);
    }
    return pq.size();
};