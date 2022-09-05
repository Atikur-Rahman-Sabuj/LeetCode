/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
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
};