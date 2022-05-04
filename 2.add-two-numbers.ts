/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start

//Definition for singly-linked list.
// class ListNode {
//    val: number;
//    next: ListNode | null;
//    constructor(val?: number, next?: ListNode | null) {
//       this.val = val === undefined ? 0 : val;
//       this.next = next === undefined ? null : next;
//    }
// }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
   let head = new ListNode(0);
   let curr = head;
   let carry = 0;
   while (l1 && l2) {
      let sum = l1.val + l2.val + carry;
      carry = Math.floor(sum / 10);
      let node = new ListNode(sum % 10);
      curr.next = node;
      curr = curr.next;
      l1 = l1.next;
      l2 = l2.next;
   }
   while (l1) {
      let sum = l1.val + carry;
      carry = Math.floor(sum / 10);
      let node = new ListNode(sum % 10);
      curr.next = node;
      curr = curr.next;
      l1 = l1.next;
   }
   while (l2) {
      let sum = l2.val + carry;
      carry = Math.floor(sum / 10);
      let node = new ListNode(sum % 10);
      curr.next = node;
      curr = curr.next;
      l2 = l2.next;
   }
   if (carry) {
      let node = new ListNode(carry);
      curr.next = node;
      curr = curr.next;
   }
   return head.next;
}
// @lc code=end
