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

function goodNodes(root: TreeNode | null): number {
    let count = 0;
    findGoodNodes(root, Number.MIN_SAFE_INTEGER);
    function findGoodNodes(node, maxVal){
        if(node === null) return;
        let _maxVal = maxVal;
        if(node.val >= maxVal){
            count++;
            _maxVal = node.val;
        }
        findGoodNodes(node.left, Math.max(maxVal, _maxVal))
        findGoodNodes(node.right, Math.max(maxVal, _maxVal))
    }
    return count;
};