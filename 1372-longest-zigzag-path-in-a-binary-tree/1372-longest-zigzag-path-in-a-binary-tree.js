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
var longestZigZag = function(root) {
    let ans = 0;
    find(root.left, 1, true);
    find(root.right, 1, false);
    function find(node, val, isLeft){
        if(node === null) return;
        ans = Math.max(ans, val);
        if(isLeft){
            find(node.right, val + 1, false)
            find(node.left, 1, true)
        }
        else{
            find(node.left, val + 1, true)
            find(node.right, 1, false)
        }
    }
    return ans;
};