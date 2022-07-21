/*
 * @lc app=leetcode id=820 lang=typescript
 *
 * [820] Short Encoding of Words
 */

// @lc code=start
function minimumLengthEncoding(words: string[]): number {
   class TrieNode {
      children: { [key: string]: TrieNode } = {};
      length: number = 0;
   }
   class Trie {
      root: TrieNode = new TrieNode();
      insert = (word: string) => {
         let node = this.root;
         for (let i = word.length - 1; i >= 0; i--) {
            const c = word[i];
            if (!node.children[c]) {
               node.children[c] = new TrieNode();
            }
            node = node.children[c];
            node.length = 0;
         }
         if (Object.keys(node.children).length === 0) {
            node.length = word.length + 1;
         }
      };
      findTotalLength = (): number => {
         let totalLength = 0;
         const findAllLength = (node: TrieNode) => {
            totalLength += node.length;
            for (const key in node.children) {
               findAllLength(node.children[key]);
            }
         };
         findAllLength(this.root);
         return totalLength;
      };
   }
   const trie = new Trie();
   for (const word of words) {
      trie.insert(word);
   }
   return trie.findTotalLength();
}
// @lc code=end
