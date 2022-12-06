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
var oddEvenList = function(head) {
    if(head === null) return head;
    var preHead = {};
    preHead.next = head;
    var itr  = {}, oddP = head;
    itr = head.next;
    var i = 1;
    while(itr && itr.next){
        //console.log(itr.next.val)
        let temp = itr.next;
        itr.next = temp.next
        temp.next = oddP.next;
        oddP.next = temp;
        oddP = oddP.next;
        //console.log(head)
        itr = itr.next;
    }
    return preHead.next;
};