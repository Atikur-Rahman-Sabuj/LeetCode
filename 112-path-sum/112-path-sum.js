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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let hasSum = false;
    function findSum(node, sum){
        if(node === null){
            return;
        }
        if(node.left === null && node.right === null){
            if(sum + node.val === targetSum)
                hasSum = true;
            return;
        }
        findSum(node.left, sum + node.val);
        findSum(node.right, sum + node.val);
    }
    findSum(root, 0);
    return hasSum;
};