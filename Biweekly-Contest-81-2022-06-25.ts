//Biweekly-Contest-81-2022-06-25
//6104. Count Asterisks
//Accepted
function countAsterisks(s: string): number {
   let inPair = false;
   let ans = 0;
   for (const char of s) {
      if (char === "*" && inPair === false) {
         ans++;
      } else if (char === "|") {
         inPair = !inPair;
      }
   }
   return ans;
}
//2317. Maximum XOR After Operations
function maximumXOR(nums: number[]): number {
   let ans = 0;
   for (const num of nums) {
      ans |= num;
   }
   return ans;
}

//6106. Count Unreachable Pairs of Nodes in an Undirected Graph
//Time limit
function countPairs(n: number, edges: number[][]): number {
   const segments: number[] = Array(n).fill(0);
   const graph: Array<Set<number>> = Array(n);
   for (let i = 0; i < n; i++) {
      graph[i] = new Set();
   }
   for (const edge of edges) {
      graph[edge[0]].add(edge[1]);
      graph[edge[1]].add(edge[0]);
   }
   const visited: number[] = Array(n).fill(0);
   //console.log(graph);
   function search(t: number, k: number) {
      visited[t] = 1;
      segments[k]++;
      for (const item of graph[t]) {
         if (!visited[item]) {
            search(item, k);
         }
      }
   }
   let total = (n * (n - 1)) / 2;
   for (let i = 0; i < n; i++) {
      if (!visited[i]) {
         search(i, i);
         total -= (segments[i] * segments[i] - 1) / 2;
      }
   }

   console.log(segments, total);
   return total;
}

countPairs(7, [
   [0, 2],
   [0, 5],
   [2, 4],
   [1, 6],
   [5, 4],
]);
countPairs(11, [
   [5, 0],
   [1, 0],
   [10, 7],
   [9, 8],
   [7, 2],
   [1, 3],
   [0, 2],
   [8, 5],
   [4, 6],
   [4, 2],
]);
countPairs(9, [
   [5, 4],
   [8, 1],
   [3, 0],
   [0, 2],
   [6, 0],
   [0, 1],
   [4, 3],
   [7, 5],
]);
countPairs(82, [
   [9, 46],
   [20, 5],
   [32, 24],
   [4, 6],
   [16, 71],
   [36, 34],
   [14, 55],
   [5, 1],
   [11, 58],
   [3, 43],
   [23, 26],
   [8, 21],
   [14, 25],
   [4, 16],
   [63, 70],
   [63, 64],
   [53, 50],
   [28, 14],
   [37, 38],
   [31, 34],
   [22, 30],
   [3, 35],
   [0, 2],
   [33, 0],
   [3, 0],
   [62, 7],
   [47, 34],
   [59, 22],
   [48, 25],
   [14, 12],
   [7, 5],
   [76, 22],
   [1, 40],
   [57, 31],
   [11, 7],
   [6, 29],
   [63, 25],
   [17, 49],
   [37, 51],
   [81, 15],
   [24, 9],
   [33, 61],
   [62, 67],
   [77, 51],
   [69, 52],
   [31, 17],
   [4, 3],
   [18, 73],
   [1, 9],
   [0, 8],
   [12, 39],
   [75, 46],
   [16, 17],
   [65, 12],
   [22, 44],
   [56, 72],
   [6, 22],
   [66, 42],
   [31, 79],
   [74, 30],
   [43, 50],
   [9, 15],
   [14, 60],
   [11, 19],
   [68, 42],
   [80, 34],
   [72, 78],
   [1, 0],
   [12, 7],
   [6, 42],
   [13, 8],
   [10, 6],
   [38, 54],
   [46, 52],
   [13, 41],
   [18, 6],
   [56, 3],
   [38, 45],
   [37, 0],
   [23, 0],
   [27, 9],
]);
