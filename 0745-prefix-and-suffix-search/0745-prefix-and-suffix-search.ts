class TrieNode {
   children: { [key: string]: TrieNode } = {};
   index: number = -1;
}
class Trie {
   root: TrieNode = new TrieNode();
   insert = (word: string, index: number) => {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
         const c = word[i];
         if (!node.children[c]) {
            node.children[c] = new TrieNode();
         }
         node = node.children[c];
      }
      node.index = index;
   };
   find = (prefix: string, suffix: string, words: string[]): number => {
      let node = this.root;
      for (let i = 0; i < prefix.length; i++) {
         const c = prefix[i];
         if (!node.children[c]) {
            return -1;
         }
         node = node.children[c];
      }
      let index: number = -1;
      const findAllIndex = (node: TrieNode) => {
         if (node.index !== -1) {
            const word = words[node.index];
            if (word.endsWith(suffix)) {
               index = Math.max(index, node.index);
            }
         }
         for (const key in node.children) {
            findAllIndex(node.children[key]);
         }
      };
      findAllIndex(node);
      return index;
   };
}
class WordFilter {
   words: string[];
   prefixTrie: Trie;
   constructor(words: string[]) {
      this.words = words;

      this.prefixTrie = new Trie();
      for (let i = 0; i < words.length; i++) {
         const word = words[i];
         this.prefixTrie.insert(word, i);
      }
   }

   f(prefix: string, suffix: string): number {
      return this.prefixTrie.find(prefix, suffix, this.words);
   }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */