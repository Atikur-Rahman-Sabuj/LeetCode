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
 * @return {number[]}
 */
var largestValues = function(root) {
    const ans = [];
    const traverse = (node, level) => {
        ans[level] = Math.max(node.val, ans[level] ?? -Infinity);
        if(node.left){
            traverse(node.left, level + 1);
        }
        if(node.right){
            traverse(node.right, level + 1);
        }
    }
    if(root)
        traverse(root, 0);
    return ans;
};