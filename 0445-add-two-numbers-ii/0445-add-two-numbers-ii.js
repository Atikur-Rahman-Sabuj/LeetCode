/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const q = [];
    let t = l1;
    while(t !== null){
        q.push(t.val);
        t = t.next;
    }
    let c = 0;
    function s(n){
        if(n.next){
            s(n.next)
        }
        if(q.length){
            c = q.pop() + c;
        }
        //console.log(c, n.val)
        const sum = c + n.val;
        n.val = sum%10;
        c = Math.floor(sum/10)
    }
    s(l2);
    while(q.length){
        const sum = q.pop() + c;
        const n = new ListNode(sum%10, l2);
        c = Math.floor(sum/10)
        l2 = n;
    }
    if(c){
        const n = new ListNode(c, l2);
        l2 = n;
    }
    return l2;
};