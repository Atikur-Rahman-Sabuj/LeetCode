/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
   const pq = new MinPriorityQueue();
    let usedBricks = 0;
   for (let i = 1; i < heights.length; i++) {
      const d = heights[i] - heights[i - 1];
      if (d > 0) {
         pq.enqueue(d);
         let size = pq.size();
         if(size > ladders){
             usedBricks += pq.dequeue().element;
             if(usedBricks > bricks){
                 return i-1;
             }
         }
          
      }
   }
   return heights.length - 1;
};