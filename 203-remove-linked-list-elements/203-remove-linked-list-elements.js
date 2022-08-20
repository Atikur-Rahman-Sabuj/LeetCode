/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const preHead = new ListNode();
    preHead.next = head;
    let temp = preHead;
    while(temp !== null && temp.next !== null){
        while(temp.next !== null && temp.next.val === val){
            temp.next = temp.next.next;
        }
        temp = temp.next;
    }
    return preHead.next;
};