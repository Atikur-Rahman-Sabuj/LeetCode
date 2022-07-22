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

function partition(head: ListNode | null, x: number): ListNode | null {
    let _head1 = new ListNode();
    let _head2 = new ListNode();
    let s = _head1;
    let g = _head2;
    //_head.next = head;
    let i = head;
    while(i !== null){
        if(i.val<x){
            s.next = i;
            s = i;
        }else{
            g.next = i;
            g = i;
        }
        i = i.next;
    }
    g.next = null;
    //console.log(_head1);
    //console.log(_head2)
    s.next = _head2.next;
    return _head1.next;
};