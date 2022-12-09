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

function maxAncestorDiff(root: TreeNode | null): number {
    let ans = 0;
    traverse(root, 100000, -1);
    function traverse(node, min, max){
        if(node === null) return;
        min = Math.min(min, node.val);
        max = Math.max(max, node.val);
        ans = Math.max(ans, max - min);
        traverse(node.left, min, max);
        traverse(node.right, min, max);
    }
    return ans;
};