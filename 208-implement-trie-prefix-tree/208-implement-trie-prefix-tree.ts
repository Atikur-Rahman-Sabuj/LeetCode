class Trie {
    head:TrieNode;
    constructor() {
        this.head = new TrieNode();
    }

    insert(word: string): void {
        let temp = this.head;
        for(let k = 0 ; k < word.length ; k++){
            let i = word[k].charCodeAt(0) - 'a'.charCodeAt(0);
            if(temp.next[i] === undefined){
                temp.next[i] = new TrieNode();
            }
            temp = temp.next[i];
            if((k+1) === word.length){
                temp.last = true;
            }
        }
    }

    search(word: string): boolean {
        let temp = this.head;
        for(let k = 0 ; k < word.length ; k++){
            let i = word[k].charCodeAt(0) - 'a'.charCodeAt(0);
            if(temp.next[i] === undefined){
                return false;
            }else{
                temp = temp.next[i];
            }
            if((k+1) === word.length && temp.last === false){
                return false;
            }
        }
        return true;
    }

    startsWith(prefix: string): boolean {
        let temp = this.head;
        for(let k = 0 ; k < prefix.length ; k++){
            let i = prefix[k].charCodeAt(0) - 'a'.charCodeAt(0);
            if(temp.next[i] === undefined){
                return false;
            }else{
                temp = temp.next[i];
            }

        }
        return true;
    }
}

class TrieNode{
    next: TrieNode[];
    last: boolean;
    constructor() {
        this.next = [];
        this.last = false;
    }

}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */