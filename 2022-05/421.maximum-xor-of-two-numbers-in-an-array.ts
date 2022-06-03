/*
 * @lc app=leetcode id=421 lang=typescript
 *
 * [421] Maximum XOR of Two Numbers in an Array
 */

// @lc code=start
function findMaximumXOR(nums: number[]): number {
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
   const trie = new Trie();
   for (const num of nums) {
      trie.insert(num);
   }
   let max = 0;
   for (const num of nums) {
      max = Math.max(max, trie.searchMax(num));
   }
   return max;
}
// @lc code=end
