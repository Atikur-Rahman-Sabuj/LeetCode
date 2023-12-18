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
var reverseList = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    
    const finalHeadNode = reverseList(head.next);
    
    const nextNode = head.next;
    nextNode.next = head;
    head.next = null;
    
    return finalHeadNode;
};