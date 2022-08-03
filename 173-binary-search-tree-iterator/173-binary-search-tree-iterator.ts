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

class BSTIterator {
    values:number[];
    index:number;
    constructor(root: TreeNode | null) {
        this.values = [];
        this.index = 0;
        this.inOrderTraverse(root);
    }
    
    inOrderTraverse(node){
        if(node === null) return;
        this.inOrderTraverse(node.left)
        this.values.push(node.val)
        this.inOrderTraverse(node.right)
    }
    
    next(): number {
        return this.values[this.index++];
    }

    hasNext(): boolean {
        return this.values[this.index] !== undefined;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */