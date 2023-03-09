/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let node = head;
    if(head === null) return head;
    while (true) {
      if (node.next === null) return null;
      if(node.next === node) return node;
      let t = head;
      while (t !== node) {
         if (t === node.next) {
            return t;
         }
         t = t.next;
      }
      node = node.next;
    }
};