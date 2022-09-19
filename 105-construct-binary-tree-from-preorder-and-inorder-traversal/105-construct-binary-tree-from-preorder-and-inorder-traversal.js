/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    return createTree(0, 0, preorder.length - 1);
    function createTree(preS, inS, inE){
        if(preS === preorder.length || inS > inE) return null;
        const n = new TreeNode(preorder[preS]);
        let inIndex = inorder.indexOf(preorder[preS]);
        n.left = createTree(preS + 1, inS, inIndex - 1);
        n.right = createTree(preS + inIndex - inS + 1, inIndex + 1, inE);
        return n;
    }
};