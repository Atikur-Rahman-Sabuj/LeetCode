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

//2321. Maximum Score Of Spliced Array
function maximumsSplicedArray(nums1: number[], nums2: number[]): number {
   const m = nums1.length;
   let max1 = 0;
   let max2 = 0;
   let sum1 = 0;
   let sum2 = 0;
   let tSum1 = 0;
   let tSum2 = 0;
   for (let i = 0; i < m; i++) {
      sum1 = Math.max(sum1 + nums2[i] - nums1[i], nums2[i] - nums1[i]);
      max1 = Math.max(max1, sum1);
      sum2 = Math.max(sum2 + nums1[i] - nums2[i], nums1[i] - nums2[i]);
      max2 = Math.max(max2, sum2);
      tSum1 += nums1[i];
      tSum2 += nums2[i];
   }
   return Math.max(tSum1 + max1, tSum2 + max2);
}
