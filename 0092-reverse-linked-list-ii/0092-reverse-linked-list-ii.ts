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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
   let n = new ListNode();
   n.next = head;
   let iterator: ListNode | null | undefined = n;
   let i = 0;
   let temp2 = null, start = null, end = null;
   let temp3 = null;
   while (iterator != null) {
      if(i === left-1) start = iterator;
      if(i === right+1) end.next = iterator;
       //console.log(start.val, end?end.val:0, iterator.val)
      if (left <= i && i <= right) {
       //  console.log("hello")
        if(i === left){ 
            end = iterator;
            iterator = end.next;
        }
        else{
            end.next = iterator.next;
            iterator.next = start.next;
            start.next = iterator;
            iterator = end.next;
        }
       // console.log(head)
         
      }else{
          iterator = iterator.next;
       //   console.log("here")
      }
      i++;
      // console.log(i)
   }
   return n.next;
};