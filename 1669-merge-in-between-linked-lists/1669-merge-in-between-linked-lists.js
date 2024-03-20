/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let i = 1, temp = list1, first = null, last = null;
    while(temp !== null){
        if(i === a){
            first = temp;
        }
        if(i === b){    
            let temp2 = list2;
            while(temp2.next !== null) temp2 = temp2.next;
            temp2.next = temp.next.next;
            break;
        }
        i++;
        temp = temp.next;
    }
    first.next = list2;
    return list1;
};