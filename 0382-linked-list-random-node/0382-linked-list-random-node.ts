/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class Solution {
    head:ListNode
    m:Map<number, ListNode>
    constructor(head: ListNode | null) {
        this.head = head;
        let i = 0;
        let temp = head;
        this.m = new Map()
        while(temp !== null){
            this.m.set(i, temp)
            i++
            temp = temp.next
        }
    }

    getRandom(): number {
        const len = this.m.size
        //console.log(len)
        return this.m.get(Math.floor(Math.random()*len)).val
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */