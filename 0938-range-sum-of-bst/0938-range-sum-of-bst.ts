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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let ans = 0;
    traverse(root);
    return ans;
    function traverse(node){
        if(node === null) return;
        if(low <= node.val && node.val <= high){
            ans += node.val;
        }
        if(node.val >= low){
            traverse(node.left)
        }
        if(node.val <= high){
            traverse(node.right)
        }
    }
};