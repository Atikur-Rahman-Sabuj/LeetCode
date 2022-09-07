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
 * @return {string}
 */
var tree2str = function(root) {
    let out = [];
    return traverse(root);
    function traverse(node){
        if(node === null) return false;
        let left = traverse(node.left);
        let right = traverse(node.right);
        if(left && right){
            return node.val + "(" + left + ")(" + right + ")";
        }
        else if(right){
            return node.val + "()(" + right + ")";
        }else if(left){
            return node.val + "(" + left + ")";
        }
        return node.val.toString();
    }

};