/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    const arr = [];
    let it = head;
    while(it !== null){
        arr.push(it.val)
        it = it.next
    }
    let temp = arr[k-1]
    arr[k-1] = arr[arr.length - k]
    arr[arr.length - k] = temp;
    head = new ListNode(arr[0], null);
    it = head;
    for(let i = 1 ; i < arr.length ; i++){
        it.next = new ListNode(arr[i], null);
        it = it.next;
    }
    return head
};