/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const head = new ListNode();
    let it = head;
    const pq = new MinPriorityQueue({priority: node => node.val});
    lists.forEach(listHead=>{
        if(listHead)
            pq.enqueue(listHead);
    })
    while(pq.size()){
        let temp = pq.dequeue().element;
        if(temp.next){
            pq.enqueue(temp.next);
        }
        it.next = temp;
        it = temp;
    }
    return head.next;
};