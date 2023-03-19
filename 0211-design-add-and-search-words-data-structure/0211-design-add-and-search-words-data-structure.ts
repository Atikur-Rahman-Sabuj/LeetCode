class WordDictionary {
    isWord: boolean;
    child: {[Key: string]: WordDictionary};
    constructor() {
        this.child = {}; 
        this.isWord = false;
    }

    addWord(word: string): void {
        let curr: WordDictionary = this;
        for(const c of word) {
            if(!curr.child[c]) {
                curr.child[c] = new WordDictionary();
            }
            curr = curr.child[c];
        }
        curr.isWord = true;
    }

    search(word: string, i = 0): boolean {
        let curr: WordDictionary = this;
        for(;i < word.length; i++) {
            const c = word[i];
            if(c !== '.') {
                if(!curr.child[c]) { 
                    return false; 
                }
                curr = curr.child[c];
            } else {
                for(const key in curr.child) {
                    if(curr.child[key].search(word, i + 1)){
                        return true;
                    };
                }
                return false;
            }
        }
        return curr.isWord;
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */