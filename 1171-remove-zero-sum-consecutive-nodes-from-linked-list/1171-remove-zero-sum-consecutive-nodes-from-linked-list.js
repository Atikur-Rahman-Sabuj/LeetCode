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
var removeZeroSumSublists = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prefixSumToNode = new Map();
    let prefixSum = 0;
    for (let current = dummy; current != null; current = current.next) {
        prefixSum += current.val;
        if (prefixSumToNode.has(prefixSum)) {
            let prev = prefixSumToNode.get(prefixSum);
            let toRemove = prev.next;
            let p = prefixSum + (toRemove ? toRemove.val : 0);
            while (p != prefixSum) {
                prefixSumToNode.delete(p);
                toRemove = toRemove.next;
                p += toRemove ? toRemove.val : 0;
            }
            prev.next = current.next;
        } else {
            prefixSumToNode.set(prefixSum, current);
        }
    }
    return dummy.next;
};