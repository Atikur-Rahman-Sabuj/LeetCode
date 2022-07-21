/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start

// Definition for singly-linked list.
// class ListNode {
//    val: number;
//    next: ListNode | null;
//    constructor(val?: number, next?: ListNode | null) {
//       this.val = val === undefined ? 0 : val;
//       this.next = next === undefined ? null : next;
//    }
// }

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
   let a = headA;
   let b = headB;
   let result = null;
   while (a !== null) {
      while (b !== null) {
         if (a === b) {
            result = a;
            break;
         }
         b = b.next;
      }
      if (result !== null) {
         break;
      } else {
         b = headB;
         a = a.next;
      }
   }
   return a;
}
// @lc code=end
