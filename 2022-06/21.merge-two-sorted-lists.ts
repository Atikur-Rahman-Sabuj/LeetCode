/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start

//  Definition for singly-linked list.
class ListNode {
   val: number;
   next: ListNode | null;
   constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
   }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
   let head = new ListNode();
   let iterator = head;
   while (list1 !== null && list2 !== null) {
      if (list1?.val > list2?.val) {
         iterator.next = list1;
         iterator = iterator.next;
         list1 = list1.next;
      } else {
         iterator.next = list2;
         iterator = iterator.next;
         list2 = list2.next;
      }
   }
   while (list1 !== null) {
      iterator.next = list1;
      iterator = iterator.next;
      list1 = list1.next;
   }

   while (list2 !== null) {
      iterator.next = list2;
      iterator = iterator.next;
      list2 = list2.next;
   }
   return head.next;
}
// @lc code=end
