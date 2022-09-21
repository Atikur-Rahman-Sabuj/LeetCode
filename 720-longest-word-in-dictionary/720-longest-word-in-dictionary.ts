function longestWord(words: string[]): string {
    let ans = ""
    class Trie{
        w: Trie[];
        e: boolean;
        constructor() {
            this.w = [];
            this.e = false;
        }
    
        insert = (word) =>{
            let t:Trie = this;
            for(const c of word){
                let cCode = c.charCodeAt(0) - 'a'.charCodeAt(0);
                if(t.w[cCode] !== undefined){
                    t = t.w[cCode];
                }else{
                    t.w[cCode] = new Trie();
                    t = t.w[cCode];
                }
            }
            t.e = true;
        }
        

    }
    const trie = new Trie();
    for(const word of words){
        trie.insert(word);
    }
    findLarge("", trie);
    return ans;

    function findLarge (st, triet) {
        let l = 0
        for(let i = 0 ; i < triet.w.length ; i++){
            if(triet.w[i] !== undefined && triet.w[i].e){
                let temp = st + String.fromCharCode(i+'a'.charCodeAt(0));
                if(temp.length > ans.length) ans = temp;
                else if(temp.length === ans.length && temp < ans) ans = temp;
                findLarge(temp, triet.w[i])
            }
        }
    }
    
    
    

};