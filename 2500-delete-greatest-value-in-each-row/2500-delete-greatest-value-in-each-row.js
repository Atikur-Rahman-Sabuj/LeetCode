/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    const pq = [];
    for(let i = 0 ; i < grid.length ; i++){
        pq[i] = new MaxPriorityQueue();
        for(let j = 0 ; j < grid[0].length ; j++){
            pq[i].enqueue(grid[i][j]);
        }
    }
    let ans = 0;
    for(let i = 0 ; i < grid[0].length ; i++){
        let temp = 0;
        for(let j = 0 ; j < grid.length ; j++){
            temp = Math.max(temp, pq[j].dequeue().element);
        }
        ans += temp;
    }
    return ans;
};