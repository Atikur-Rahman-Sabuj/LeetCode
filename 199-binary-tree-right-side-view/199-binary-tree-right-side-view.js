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
var rightSideView = function(root) {
    let ans = [];
    traverse(root, 0);
    function traverse(node, level){
        if(node === null) return;
        
        if(ans[level] === undefined){
            ans[level] = node.val;
        }
        
        traverse(node.right, level + 1);
        traverse(node.left, level + 1);
    }
    return ans;
};