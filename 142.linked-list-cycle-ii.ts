/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
   let node = head;
   if (head === null) return head;
   while (true) {
      if (node.next === null) return null;
      if (node.next === node) return node;
      let t = head;
      while (t !== node) {
         if (t === node.next) {
            return t;
         }
         t = t.next;
      }
      node = node.next;
   }
}
// @lc code=end
