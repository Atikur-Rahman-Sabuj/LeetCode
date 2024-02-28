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
var findBottomLeftValue = function(root) {
    
    let maxlevel = -1, val = -1;
    traverse(root, 1);
    function traverse(node, level){
        if(node == null) return;
        if(level > maxlevel){
            maxlevel = level;
            val = node.val;
        }
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }
    return val;
};