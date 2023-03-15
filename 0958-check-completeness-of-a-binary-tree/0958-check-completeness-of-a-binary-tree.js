/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    const d = new Array(1000).fill(0);
    let b = [];
    
    let hd = 0;
    dfs(root, 0, 0);
    
    let i = 1
    //console.log(d)
    while(d[i] !== 0){
        if(d[i] !== d[i-1]*2 && d[i+1] !== 0) return false;
        i++
    }
    
    //console.log(b)
    
    for(let i = 0 ; i < b.length ; i++){
        if(b[i][0] !== i) return false;
    }
    
    return true;
    
    function dfs(node, depth, pos){
        
        d[depth]++
        
        if(!node.left && !node.right){
            if(depth < hd) return
            if(depth > hd){
                hd = depth;
                b = [];
            }
            b.push([pos, node]);
            return
        }
        
        if(node.left)
            dfs(node.left, depth + 1, pos*2)
        if(node.right)
            dfs(node.right, depth + 1, (pos*2) + 1)
    }
};