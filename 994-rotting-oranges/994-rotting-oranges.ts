function orangesRotting(grid: number[][]): number {
  const m = grid.length,
      n = grid[0].length;
    if (m == 0) return -1;
   const rotten: number[][] = [];
   let fresh = 0;
   let minute = 0;
   for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
         if (grid[i][j] === 2) {
            rotten.push([i, j]);
         } else if (grid[i][j] === 1) {
            fresh++;
         }
      }
   }

   while (rotten.length > 0 && fresh > 0) {
      minute++;
      const l = rotten.length;
      for (let i = 0; i < l; i++) {
         const [x, y] = rotten.shift() as Iterable<number>;
         for (const [dx, dy] of [
            [x + 1, y],
            [x, y + 1],
            [x - 1, y],
            [x, y - 1],
         ]) {
            if (dx < 0 || dy < 0 || dx == m || dy == n) continue;
            if (grid[dx][dy] === 0 || grid[dx][dy] === 2) continue;
            fresh--;
            grid[dx][dy] = 2;
            rotten.push([dx, dy]);
         }
      }
   }

   return fresh == 0 ? minute : -1;
};