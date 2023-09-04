/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let first = head;
    while(first != null && first.next != null){
        slow = slow.next;
        first = first.next.next;
        if(slow === first) return true;
    }
    return false;
};
