/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
    if(head === null) return null;
    let temp = head;
    while(temp !== null){
        const node = new Node(temp.val, temp.next);
        temp.next = node;
        temp = node.next;
    }
    temp = head;
    while(temp !== null){
        let temp2 = temp.random;
        if(temp2 !== null)
            temp.next.random = temp2.next;
        temp = temp.next.next;
    }
    temp = head;
    let temp2 = head.next;
    const ans = head.next;
    while(temp !== null){
        temp.next = temp2.next;
        temp = temp.next;
        if(temp === null) break;
        temp2.next = temp.next;
        temp2 = temp2.next;
    }
    return ans;
};