/*
 * @lc app=leetcode id=589 lang=typescript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start

//ß  Definition for node.
class Node {
   val: number;
   children: Node[];
   constructor(val?: number) {
      this.val = val === undefined ? 0 : val;
      this.children = [];
   }
}

function preorder(root: Node | null): number[] {
   const out: number[] = [];
   function traverse(node: Node) {
      out.push(node.val);
      for (let i = 0; i < node.children.length; i++) {
         traverse(node.children[i]);
      }
   }
   if (root !== null) traverse(root);
   return out;
}
// @lc code=end
