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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(head === null) return head;
    let length = 0;
    let temp = head;
    while(temp !== null){
        temp = temp.next;
        length++;
    }
    k = k % length;
    let slow = head;
    let fast = head;
    let count = 0;
    while(fast.next !== null){
        fast = fast.next;
        count++;
        if(count > k){
            slow = slow.next;
        }
    }
    fast.next = head;
    const result = slow.next;
    slow.next = null
    return result;
};