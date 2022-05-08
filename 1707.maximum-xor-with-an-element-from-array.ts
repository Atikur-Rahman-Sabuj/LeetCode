/*
 * @lc app=leetcode id=1707 lang=typescript
 *
 * [1707] Maximum XOR With an Element From Array
 */

// @lc code=start
function maximizeXor(nums: number[], queries: number[][]): number[] {
   class TNode {
      children: TNode[] = [];
   }

   class Trie {
      root: TNode = new TNode();
      insert = (num: number) => {
         let node = this.root;
         for (let i = 31; i >= 0; i--) {
            const bit = (num >> i) & 1;
            if (!node.children[bit]) {
               node.children[bit] = new TNode();
            }
            node = node.children[bit];
         }
      };
      searchMax = (num: number) => {
         let node = this.root;
         let ans = 0;
         for (let i = 31; i >= 0; i--) {
            const bit = (num >> i) & 1;
            if (node.children[bit ^ 1]) {
               ans = ans ^ (1 << i);
               node = node.children[bit ^ 1];
            } else {
               node = node.children[bit];
            }
         }
         return ans;
      };
   }

   nums.sort((a, b) => a - b);
   queries.forEach((q, i) => {
      queries[i][2] = i;
   });
   queries.sort((a, b) => {
      return a[1] - b[1];
   });

   const output = new Array(queries.length);
   const trie = new Trie();
   let index = 0;
   for (const query of queries) {
      while (nums[index] <= query[1] && index < nums.length) {
         trie.insert(nums[index]);
         index++;
      }
      if (index != 0) output[query[2]] = trie.searchMax(query[0]);
      else output[query[2]] = -1;
   }
   return output;
}
// @lc code=end
