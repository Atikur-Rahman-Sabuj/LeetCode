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
var swapPairs = function(head) {
    if(!head) return head;
    let th = new ListNode(null, head);
    let temp = th;
    while(temp.next && temp.next.next){
        let t1 = temp.next;
        let t2 = temp.next.next;
        t1.next = t2.next;
        t2.next = t1;
        temp.next = t2;
        temp = t1;;
    }
    return th.next;
};