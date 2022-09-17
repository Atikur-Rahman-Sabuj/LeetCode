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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if(root === null) return [];
    const ans = []
    findPath(root, 0, [])
    function findPath(node, sum, arr){
        if(node.left === null && node.right === null){
            if(sum + node.val === targetSum) ans.push([...arr, node.val]);
            return;
        }
        if(node.left){
            findPath(node.left, sum+ node.val, [...arr, node.val])
        }
        if(node.right){
            findPath(node.right, sum + node.val, [...arr, node.val]);
        }
        
    }
    return ans;
};