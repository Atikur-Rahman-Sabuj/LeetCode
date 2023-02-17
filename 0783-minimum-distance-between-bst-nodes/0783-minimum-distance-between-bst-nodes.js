/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let ans = Infinity
    find(root)
    return ans;
    function find(node){
        if(node === null) return[Infinity, -Infinity];
        const [leftS, leftB] = find(node.left)
        const [rightS, rightB] = find(node.right)
        ans = Math.min(ans, node.val - leftB, rightS - node.val)
        return [Math.min(leftS, node.val, rightS), Math.max(node.val, rightB, leftB)]
    }
};


