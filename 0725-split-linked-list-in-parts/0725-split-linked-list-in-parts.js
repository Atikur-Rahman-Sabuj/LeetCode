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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let c = 0 , t = head;
    while(t !== null){
        c++;
        t = t.next;
    }
    t = head;
    const ans = new Array(k).fill(null), perPart = Math.floor(c / k);
    let fullPart = c % k;
    for(let i = 0 ; i < k ; i++){
        if(t != null){
            ans[i] = t;
            let temp = perPart - 1;
            if(fullPart > 0){
                fullPart--;
                temp++;
            }
            while(temp-- && t !== null){
                t = t.next;
            }
            let node = t;
            if(t !== null){
                t = t.next;
                node.next = null;
            }
        }
    }
    return ans;
};