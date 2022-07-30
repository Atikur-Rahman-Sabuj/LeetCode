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
var sortList = function(head) {
    if(head === null || head.next === null) return head;
    let temp = null, slow = head, fast = head;
    
    while(fast !== null && fast.next !== null){
        temp = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    temp.next = null;
    const l1 = sortList(head);
    const l2 = sortList(slow);
    return mergeSort(l1, l2);
    
};

function mergeSort(l1, l2){
    let temp = {};
    let current = temp;
    while(l1 !== null && l2 !== null){
        if(l1.val<l2.val){
            current.next = l1;
            l1 = l1.next;
            
        }else{
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    while(l1!==null){
        current.next = l1;
        l1 = l1.next;
        current = current.next;
    }
    while(l2!==null){
        current.next = l2;
        l2 = l2.next;
        current = current.next;
    }
    return temp.next;
}