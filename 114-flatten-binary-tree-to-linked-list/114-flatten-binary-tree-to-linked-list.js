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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let temp = root;
    while(temp){
        if(temp.left){
            let temp2 = temp.left;
            while(temp2.right){
                temp2 = temp2.right;
            }
            temp2.right = temp.right
            temp.right = temp.left;
            temp.left = null;
        }
        temp = temp.right;
        //console.log(root)
    }
    return root;
};