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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const leafs =[[],[]];
    traverse(root1, 0);
    traverse(root2, 1);
    const ml = Math.max(leafs[0].length, leafs[1].length);
    for(let i = 0 ; i < ml; i++){
        if(leafs[0][i] !== leafs[1][i]) return false;
    }
    return true;
    function traverse(node, t){
        if(!node.left && !node.right){
            leafs[t].push(node.val);
            return;
        }
        if(node.left){
            traverse(node.left, t);
        }
        if(node.right){
            traverse(node.right, t);
        }
    }
};