function findWords(board: string[][], words: string[]): string[] {
    class TrieNode {
      children: TrieNode[] = [];
      index: number = -1;
    }
    class Trie {
      root: TrieNode = new TrieNode();
      insert = (word: string, index: number) => {
         let node = this.root;
         for (let i = 0; i < word.length ; i++) {
            const c = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (!node.children[c]) {
               node.children[c] = new TrieNode();
            }
            node = node.children[c];
         }
         node.index = index;
      };
    }
    const trie = new Trie();
    for(let i = 0 ; i < words.length ; i++){
        trie.insert(words[i], i);
    }

    const r = board.length;
    const col = board[0].length;
    const res = [];
    let visited = [];
    for(let i = 0 ; i < r ; i++){
        for(let j = 0 ; j < col ; j++){
            find(i, j, trie.root);
        }
    }

    function find(i, j, trieNode){
        if(trieNode.index !== -1){
            res[trieNode.index] = true;
        }
        if(i < 0 || j < 0 || i === r || j === col || visited[(col * i) + j]) return;
        const c = board[i][j].charCodeAt(0) - 'a'.charCodeAt(0);
        if(!trieNode.children[c]) return;
        visited[col * i + j] = true;
        find(i, j+1, trieNode.children[c]);
        find(i, j-1, trieNode.children[c]);
        find(i-1, j, trieNode.children[c]);
        find(i+1, j, trieNode.children[c]);
        visited[(col * i) + j] = false;
    }
    console.log(res)
    return words.filter((val, i) => res[i])
    
   
};