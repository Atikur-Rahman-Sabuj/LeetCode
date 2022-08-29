/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = [];
    for (let i = 0; i < m; i++) {
      visited[i] = [];
      for (let j = 0; j < n; j++) {
         visited[i][j] = 0;
      }
    }
    function findIsland(i, j) {
      if (i < 0 || j < 0 || i === m || j === n || grid[i][j] === "0" || visited[i][j]) {
         return;
      }
      visited[i][j] = 1;
      findIsland(i + 1, j);
      findIsland(i - 1, j);
      findIsland(i, j + 1);
      findIsland(i, j - 1);
    }
    let totalIsland = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
         if (grid[i][j] === "1" && !visited[i][j]) {
            totalIsland++;
            findIsland(i, j);
         }
      }
    }
    return totalIsland;
};