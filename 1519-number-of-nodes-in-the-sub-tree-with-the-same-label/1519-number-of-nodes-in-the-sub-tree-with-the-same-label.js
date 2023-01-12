/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
    const tree = [];
    for(const edge of edges){
        if(tree[edge[0]]){
            tree[edge[0]].push(edge[1])
        }else{
            tree[edge[0]] = [edge[1]]
        }
        
        if(tree[edge[1]]){
            tree[edge[1]].push(edge[0])
        }else{
            tree[edge[1]] = [edge[0]]
        }
    }
    
    const ans = new Array(n).fill(0);
    traverse(0);
    return ans;
    function traverse(k, parent){
        const freq = new Array(26).fill(0);
        if(tree[k])
            for(const node of tree[k]){
                if(parent !== node){
                    const tempFreq = traverse(node, k);
                    tempFreq.forEach((item, idx)=>{
                        freq[idx] += item;
                    })
                }

            }
        let charCode = labels[k].charCodeAt(0) - 'a'.charCodeAt(0)
        freq[charCode]++;
        ans[k] = freq[charCode];
        
        return freq;
        
    }
    
};