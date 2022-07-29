/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var temp = head;
    let ans = true;
    function check(it){
        if(it.next === null) return it;
        let c = check(it.next);
        if(c.val !== temp.val) ans = false;
        //console.log(temp.val, c.val)
        temp = temp.next;
        return it;
    }
    check(head);
    return ans;
};