/*
 * @lc app=leetcode id=235 lang=typescript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
   let ancestor = null;
   function find(node: TreeNode | null): [boolean, boolean] {
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
}
// @lc code=end
