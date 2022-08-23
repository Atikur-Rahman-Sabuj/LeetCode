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
var maxDepth = function(root) {
    let maxDepth = 0;
    function traverse(node, depth){
        if(node === null) return;
        maxDepth = Math.max(maxDepth, depth);
        traverse(node.left, depth + 1);
        traverse(node.right, depth + 1);
    }
    traverse(root, 1);
    return maxDepth;
};