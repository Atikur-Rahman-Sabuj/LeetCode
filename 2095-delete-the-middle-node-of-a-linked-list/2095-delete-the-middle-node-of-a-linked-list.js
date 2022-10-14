/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(head.next === null) return null;
    let slow = head, fast = head; preSlow = head;
    while(fast !== null && fast.next !== null){
        preSlow = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    preSlow.next = slow.next;
    return head;
};