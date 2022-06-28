/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
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

function isValidBST(root: TreeNode | null): boolean {
   let isValidBST = true;
   function find(node: TreeNode | null, minValue: number, maxValue: number) {
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
}
// @lc code=end
