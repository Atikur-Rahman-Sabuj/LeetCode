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
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    function find(node){
        if(node === null) return -1;
        let left = find(node.left) + 1;
        let right = find(node.right) + 1;
        maxDiameter = Math.max(maxDiameter, left+right);
        return Math.max(left, right);
    }
    find(root);
    return maxDiameter;
};