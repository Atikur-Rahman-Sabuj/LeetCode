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

function swapPairs(head: ListNode | null): ListNode | null {
    if(head === null || head.next === null) return head;
    let result = head.next;
    let p = new ListNode(-1, head);
    let t = head;
    while(t !==null && t.next !==null){
        let temp = t.next;
        t.next = temp.next;
        temp.next = t;
        p.next = temp;
        p = t;
        t = t.next;
    }
    return result;
};