function topStudents(positive_feedback: string[], negative_feedback: string[], report: string[], student_id: number[], k: number): number[] {
    
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

        find = (word:string) => {
            if(word.length === 0) return false;
            let temp = this.root;
            for(let k = 0 ; k < word.length ; k++){
                let i = word[k].charCodeAt(0) - 'a'.charCodeAt(0);
                if(temp.children[i] === undefined){
                    return -1;
                }else{
                    temp = temp.children[i];
                }
            }
            return temp.index;
        }
    }
    
    const stArr = [];
    const trie = new Trie();
    for(let i = 0 ; i < positive_feedback.length ; i++){
        trie.insert(positive_feedback[i], 1)
    }
    for(let i = 0 ; i < negative_feedback.length ; i++){
        trie.insert(negative_feedback[i], 2)
    }
    
    
    const str = [];
    for(let i = 0 ; i < report.length ; i++){
        let wds = report[i].split(" ");
        let point = 0;
        for(const word of wds){
            let tf = trie.find(word)
            if(tf === 1){
                point += 3;
            }
            else if(tf === 2){
                point -= 1;
            }
            
        }
        str.push([student_id[i], point]);
    }
   // console.log(str)
    str.sort((a,b) => b[1] - a[1] || a[0] - b[0] )
    const ans = new Array(k).fill(0).map((e, i)=>str[i][0])
     
    return ans
    
    
    
    
    
    
    
    
    
    
    
};