/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let middle = fast = head;
    while(fast!=null && fast.next!=null){
        middle = middle.next;
        fast = fast.next.next;
    }
    if(fast!=null) middle = middle.next;
    let t = head;
    recurse(middle)
    function recurse(node){
        if(node === null) return;
        recurse(node.next);
        let temp = t.next;
        t.next = node;
        node.next = temp;
        t = temp;
    }
    t.next = null;
    return head;
};