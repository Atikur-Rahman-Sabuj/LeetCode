/*
 * @lc app=leetcode id=116 lang=typescript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start

// Definition for Node.
class Node {
   val: number;
   left: Node | null;
   right: Node | null;
   next: Node | null;
   constructor(val?: number, left?: Node, right?: Node, next?: Node) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
      this.next = next === undefined ? null : next;
   }
}

function connect(root: Node | null): Node | null {
   const connectNext = (node: Node | null | undefined, next: Node | null | undefined) => {
      if (node === null) return;
      node.next = next;
      connectNext(node?.left, node?.right);
      connectNext(node?.right, node?.next?.left);
   };
   connectNext(root, null);
   return root;
}
// @lc code=end
