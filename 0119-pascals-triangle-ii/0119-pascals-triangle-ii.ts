function getRow(rowIndex: number): number[] {
        const res: number[][] = [];
    for (let i = 0; i <= rowIndex; i++) {
       const row: number[] = [];
       for (let j = 0; j <= i; j++) {
          if (j === 0 || j === i) {
             row.push(1);
          } else {
             row.push(res[i - 1][j - 1] + res[i - 1][j]);
          }
       }
       res.push(row);
    }
    return res[rowIndex];
};