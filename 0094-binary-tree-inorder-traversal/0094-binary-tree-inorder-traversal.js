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
var inorderTraversal = function(root) {
    let ans = [];
    inOrder(root)
    function inOrder(node){
        if(node === null) return;
        inOrder(node.left);
        ans.push(node.val);
        inOrder(node.right);
    }
    return ans;
};