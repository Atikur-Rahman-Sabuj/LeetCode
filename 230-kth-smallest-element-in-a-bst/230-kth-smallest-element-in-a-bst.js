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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let value = -1;
    function findSmallest(node){
        if(node === null) return;
        findSmallest(node.left);
        k--;
        if(k === 0){
            value = node.val;
            return;
        } 
        
        findSmallest(node.right);
    }
    findSmallest(root);
    return value;
    
};