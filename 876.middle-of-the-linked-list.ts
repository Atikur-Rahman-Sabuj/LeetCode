/*
 * @lc app=leetcode id=876 lang=typescript
 *
 * [876] Middle of the Linked List
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

function middleNode(head: ListNode | null): ListNode | null {
   let slow = head;
   let fast = head;
   while (fast && fast.next) {
      slow = slow!.next;
      fast = fast.next.next;
   }
   return slow;
}
// @lc code=end
