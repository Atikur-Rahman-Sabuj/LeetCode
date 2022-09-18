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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    const dw = [];
    let ans = 1;
    traverse(root, 0, BigInt(1));
    //console.log(dw)
    for(const d of dw){
        if(d.length > 1){
            ans = Math.max(ans, parseInt(d[1] - d[0] + 1n));
        }
    }
    return ans;
    function traverse(node, depth, n){
        if(node === null) return;
        if(dw[depth] === undefined){
            dw[depth] = [n];
        }else{
            dw[depth][1] = n;
        }
        
        traverse(node.left, depth+1, 2n*n - 1n)
        traverse(node.right, depth+1, 2n*n)
    }
    
};