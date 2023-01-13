/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
    const tree = [];
    for(let i = 1 ; i < parent.length ; i++){
        if(tree[parent[i]]){
            tree[parent[i]].push(i)
        }else{
            tree[parent[i]] = [i];
        }
    }
    let ans = 0;
    find(0);  
    return ans;
  
    function find(node){
        let val = 0;
        const lengths = [];
        if(tree[node]){
            for(let i = 0 ; i < tree[node].length; i++){
                let temp = find(tree[node][i])
                lengths[i]  = s[node] === s[tree[node][i]] ? 1 : (temp + 1)
            }
        }else{
            val = 1;
            ans = Math.max(ans, val)
            return val;
        }
        if(lengths[1]){
            lengths.sort((a,b)=>b-a);
            val = lengths[0] + lengths[1] - 1;
        }
        else{
            val = lengths[0];
        }
        ans = Math.max(ans, val)
        return lengths[0]
        
    }
};