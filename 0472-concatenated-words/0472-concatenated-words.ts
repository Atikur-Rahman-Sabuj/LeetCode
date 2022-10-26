/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    class TrieNode {
        children: TrieNode[] = [];
        index: number = -1;
    }
    
    class Trie {
        root: TrieNode = new TrieNode();

        insert = (word: string, index: number):boolean => {
            let found = false;
            let node = this.root;
            for (let i = 0; i < word.length ; i++) {
                const c = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
                if (!node.children[c]) {
                   node.children[c] = new TrieNode();
                }
                node = node.children[c];
                if(node.index !== -1){
                    found = found || this.search(word.substring(i+1))
                }
            }
            node.index = index;
            return found;
        };

        search = (word) => {
            const arr = new Array(word.length).fill(false);
            this.find(word, arr, 0);
            for(let i = 1 ; i < word.length ; i++){
                if(arr[i-1] === true){
                    this.find(word.substring(i), arr, i);
                }
            }
            return arr[word.length - 1];
        }

        find = (word:string, arr, si) => {
            if(word.length === 0) return false;
            let temp = this.root;
            for(let k = 0 ; k < word.length ; k++){
                let i = word[k].charCodeAt(0) - 'a'.charCodeAt(0);
                if(temp.children[i] === undefined){
                    return;
                }else{
                    temp = temp.children[i];
                }
                if(temp.index !== -1){
                    arr[si+k] = true;
                }
            }
        }
    }
    
    words.sort((a,b) => a.length - b.length);
    const trie = new Trie();
    const ans = [];
    for(let i = 0 ; i < words.length ; i++){
        if(trie.insert(words[i], i)){
            ans.push(words[i]);
        }
    }
    return ans;
    

    
};