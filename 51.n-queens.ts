/*
 * @lc app=leetcode id=51 lang=typescript
 *
 * [51] N-Queens
 */

// @lc code=start
function solveNQueens(n: number): string[][] {
   const isValid = (row: number, col: number, board: string[]) => {
      let c45 = col - 1;
      let c135 = col + 1;
      for (let i = row - 1; i >= 0; i--) {
         if (board[i][col] === "Q") return false;
         if (c45 >= 0 && board[i][c45] === "Q") return false;
         if (c135 < n && board[i][c135] === "Q") return false;
         c45--;
         c135++;
      }
      return true;
   };

   const res: string[][] = [];
   const nQueens: string[] = Array(n).fill(".".repeat(n));

   const solve = (row, n) => {
      if (row === n) {
         res.push(nQueens.slice());
         return;
      }

      for (let col = 0; col < n; col++) {
         if (isValid(row, col, nQueens)) {
            nQueens[row] = nQueens[row].substring(0, col) + "Q" + nQueens[row].substring(col + 1);
            solve(row + 1, n);
            nQueens[row] = nQueens[row].substring(0, col) + "." + nQueens[row].substring(col + 1);
         }
      }
   };

   solve(0, n);
   return res;
}
// @lc code=end
