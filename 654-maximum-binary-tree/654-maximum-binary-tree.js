/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let i = 0;
    let root = new TreeNode(nums[0]);
    for(let i = 1 ; i < nums.length ; i++){
        insertToTree(new TreeNode(nums[i]), root, null)
    }
    function insertToTree(newNode, node, parent){
        if(newNode.val >= node.val && !parent){
            newNode.left = node;
            root = newNode;
        }else{
            if(newNode.val < node.val){
                if(node.right){
                    insertToTree(newNode, node.right, node);
                }else{
                    node.right = newNode;
                }
            }else{
                parent.righ = newNode;
                newNode.left = parent.right;
                parent.right = newNode;
            }
        }
    }
    return root;
};