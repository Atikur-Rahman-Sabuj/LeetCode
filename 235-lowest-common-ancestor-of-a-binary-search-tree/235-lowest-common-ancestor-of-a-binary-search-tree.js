/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ancestor = null;
   function find(node) {
      if (node === null) return [false, false];
      const [lp, lq] = find(node.left);
      const [rp, rq] = find(node.right);
      const foundP = node === p || lp || rp;
      const foundQ = node === q || lq || rq;
      if (foundP && foundQ) {
         ancestor = node;
         return [false, false];
      }
      return [foundP, foundQ];
   }
   find(root);
   return ancestor;
};