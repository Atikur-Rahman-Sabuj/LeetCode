/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head, fast = head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    slow = slow.next;
    const sv = []
    while(slow){
        sv.push(slow.val)
        slow = slow.next;
    };
    slow = head;
    let ans = 0;
    while(sv.length > 0){
        ans = Math.max(ans, slow.val + sv.pop());
        slow = slow.next;
    }
    return ans
};