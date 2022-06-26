//Weekly-Contest-299-2022-06-26.ts
//2319. Check if Matrix Is X-Matrix
//Accepted
function checkXMatrix(grid: number[][]): boolean {
   const m = grid.length;
   for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++) {
         if (i === j || i === m - j - 1) {
            if (grid[i][j] === 0) return false;
         } else {
            if (grid[i][j] !== 0) return false;
         }
      }
   }
   return true;
}

//2320. Count Number of Ways to Place Houses
function countHousePlacements(n: number): number {
   if (n === 1) return 4;
   let old = BigInt(1);
   let newR = BigInt(2);
   while (n > 2) {
      let temp = newR;
      newR = old + newR + BigInt(1);
      old = temp;
      n--;
   }
   return Number((BigInt(2) * newR + newR * newR + BigInt(1)) % BigInt(1000000007));
}
