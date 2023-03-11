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

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedListToBST(head: ListNode | null): TreeNode | null {
    const arr = [];
    let it = head;
    while(it !== null){
        arr.push(it.val);
        it = it.next;
    }
    if(!arr.length) return null;
    let headI = Math.floor(arr.length/2)
    const treeHead = new TreeNode(arr[headI]);
    generateTree(0, headI-1, treeHead, true)
    generateTree(headI+1, arr.length - 1, treeHead, false)
    return treeHead
    function generateTree(first, last, h, isLeft){
        //console.log(first, last)
        if(first > last) return null;
        
        let temp = first +  Math.ceil((last - first)/2)
        
        const tempNode = new TreeNode( arr[temp] );
        
        if(isLeft){
            h.left = tempNode
        }else{
            h.right = tempNode
        }
        
        generateTree(first, temp - 1, tempNode, true)
        generateTree(temp + 1, last, tempNode, false)
        
    }
    
};