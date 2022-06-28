/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
 */

// @lc code=start

//  Definition for a binary tree node.
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

function levelOrder(root: TreeNode | null): number[][] {
   const result: number[][] = [];
   if (root === null) return [];
   traverse(0, root);
   function traverse(level: number, node: TreeNode | null) {
      if (node === null) return;
      if (result[level] === undefined) result[level] = [];
      result[level].push(node.val);
      traverse(level + 1, node.left);
      traverse(level + 1, node.right);
   }
   return result;
}
// @lc code=end
