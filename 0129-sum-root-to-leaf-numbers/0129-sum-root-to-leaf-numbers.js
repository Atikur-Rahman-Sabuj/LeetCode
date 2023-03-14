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
var sumNumbers = function(root) {
    let sum = 0
    dfs(root, 0)
    return sum;
    function dfs(node, preValue){
        //console.log(node, node.val)
        let currentValue = (preValue * 10) + node.val
        if(!node.left && !node.right){
            sum += currentValue;
            return;
        }
        if(node.left){
            dfs(node.left, currentValue)
        }
        if(node.right){
            dfs(node.right, currentValue);
        }
    }
};