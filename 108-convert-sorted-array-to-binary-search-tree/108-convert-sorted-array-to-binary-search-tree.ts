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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    function createBST(left, right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] === undefined){
            return null;
        }
        let node = {
            val: nums[mid],
            left:null,
            right:null,
        }
        nums[mid] = undefined;
        let leftN = createBST(left, mid - 1);
        let rightN = createBST(mid+1, right);
        node.left = leftN;
        node.right = rightN;
        return node;
    }
    return createBST(0, nums.length - 1);
};