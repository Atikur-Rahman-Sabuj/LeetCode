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

function maxProduct(root: TreeNode | null): number {
    let totalSum = 0, ans = 0;
    findTotalSum(root)
    traverse(root)
    return ans % (1e9 + 7)
    
    
    function traverse(node){
        if(node === null) return 0
        const left = traverse(node.left)
        const right = traverse(node.right)
        const val = left + right + node.val
        ans = Math.max(ans, (totalSum - val) * val)
        return val
    }
    

    
    function findTotalSum(node){
        if(node === null) return
        totalSum += node.val
        findTotalSum(node.left)
        findTotalSum(node.right)
    }
};