/*
 * @lc app=leetcode id=968 lang=typescript
 *
 * [968] Binary Tree Cameras
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

function minCameraCover(root: TreeNode | null): number {
   let ans = 0;
   const findMin = (node: TreeNode | null): number => {
      if (node === null) return 2;
      let left = findMin(node.left);
      let right = findMin(node.right);
      if (left === 0 || right === 0) {
         ans++;
         return 1;
      }
      return left === 1 || right === 1 ? 2 : 0;
   };
   return (findMin(root) < 1 ? 1 : 0) + ans;
}
// @lc code=end
