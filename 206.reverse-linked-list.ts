/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */

// @lc code=start

// Definition for singly-linked list.
class ListNode {
   val: number;
   next: ListNode | null;
   constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
   }
}

function reverseList(head: ListNode | null): ListNode | null {
   let next = head?.next;
   if (head != null) head.next = null;
   while (next != null) {
      console.log(next.val);
      let temp = next;
      next = next.next;
      temp.next = head;
      head = temp;
   }
   return head;
}
// @lc code=end

//  a   b   c
