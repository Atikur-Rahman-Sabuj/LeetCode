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
var maxAncestorDiff = function(root) {
    let ans = 0;
    traverse(root, 100000, -1);
    return ans;
    function traverse(node, min, max){
        if(node === null) return;
        min = Math.min(min, node.val);
        max = Math.max(max, node.val);
        ans = Math.max(ans, max - min);
        traverse(node.left, min, max);
        traverse(node.right, min, max);
    }
    
};