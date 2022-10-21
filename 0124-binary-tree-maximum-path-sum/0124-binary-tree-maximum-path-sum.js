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
var maxPathSum = function(root) {
    let ans = Number.MIN_SAFE_INTEGER;
    traverse(root);
    function traverse(node){
        if(node === null) return 0;
        let left = traverse(node.left);
        let right = traverse(node.right);
        let val = Math.max(node.val+left, node.val+right, node.val);
        ans = Math.max(ans, val, node.val+left+right);
        return val;
    }
    return ans;
};