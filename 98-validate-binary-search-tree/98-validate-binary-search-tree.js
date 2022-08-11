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
var isValidBST = function(root) {
    let isValidBST = true;
    function find(node, minValue, maxValue) {
      if (node === null) return;
      if (node.val > minValue && node.val < maxValue) {
        find(node.left, minValue, node.val);
        find(node.right, node.val, maxValue);
      } else {
         isValidBST = false;
         return;
      }
    }
    find(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    return isValidBST;
};