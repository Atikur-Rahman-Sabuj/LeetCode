/**
 * @param {number[][]} grid
 * @return {number}
 */
const minimumTime = function(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;

    // Check if the start and end points are reachable.
    if (grid[0][1] > 1 && grid[1][0] > 1) {
        return -1;
    }

    const visited = new Array(numRows)
        .fill()
        .map(() => new Array(numCols).fill(false));

    const priorityQueue = new MinPriorityQueue({ priority: ([time]) => time });

    if (grid[0][0] === 0) {
        priorityQueue.enqueue([0, 0, 0]);
    }

    const directions = [[1, 0], [0, -1], [0, 1], [-1, 0]];

    while (!priorityQueue.isEmpty()) {
        const [time, currentRow, currentCol] = priorityQueue.dequeue().element;

        if (currentRow === numRows - 1 && currentCol === numCols - 1) {
            return time;
        }

        if (visited[currentRow][currentCol]) {
            continue;
        }

        visited[currentRow][currentCol] = true;

        for (const [rowOffset, colOffset] of directions) {
            const newRow = currentRow + rowOffset;
            const newCol = currentCol + colOffset;

            if (
                newRow < 0 ||
                newCol < 0 ||
                newRow >= numRows ||
                newCol >= numCols ||
                visited[newRow][newCol]
            ) {
                continue;
            }

            const isEven = (grid[newRow][newCol] - time) % 2 === 0;
            const timeReq = Math.max(grid[newRow][newCol] + isEven, time + 1);
            priorityQueue.enqueue([timeReq, newRow, newCol]);
        }
    }

    return -1;
};