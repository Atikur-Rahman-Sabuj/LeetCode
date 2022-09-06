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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    if(!search(root)) return null;
    function search(node){
        if(node === null) return false;
        let left = search(node.left);
        let right = search(node.right);
        if(!left) node.left = null;
        if(!right) node.right = null;
        return node.val || left || right;
    }
    return root;
};