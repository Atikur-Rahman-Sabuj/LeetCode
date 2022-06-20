/*
 * @lc app=leetcode id=617 lang=typescript
 *
 * [617] Merge Two Binary Trees
 */

// @lc code=start

// Definition for a binary tree node.
class TreeNode {
   val: number;
   left: TreeNode | null;
   right: TreeNode | null;
   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
   }
}

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
   if (root1 === null) return root2;
   if (root2 === null) return root1;
   root1.val += root2.val;
   root1.left = mergeTrees(root1.left, root2.left);
   root1.right = mergeTrees(root1.right, root2.right);
   return root1;
}
// @lc code=end
