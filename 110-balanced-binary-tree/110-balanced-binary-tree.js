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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let isBalanced = true;
    function checkBalance(node){
        if(node===null) return 0;
        let left = checkBalance(node.left)+1;
        let right = checkBalance(node.right)+1;
        
        if(Math.abs(left-right)>1)
                isBalanced = false;
        return Math.max(left, right);
    }
    checkBalance(root);
    return isBalanced;
};