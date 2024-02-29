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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    const check = [];
    let ans = true;
    traverse(root, 0)
    function traverse(node, level){
        if(node == null) return;
        traverse(node.left, level + 1);
        if(check[level] == undefined){
            if(((level & 1) && (node.val & 1)) || (!(level & 1) && !(node.val & 1))){
                ans = false;
                return;
            }
            check[level] = node.val;
        }else{
            if(level & 1){
                if((node.val & 1) || node.val >= check[level]){
                    ans = false;
                    return;
                }else{
                    check[level] = node.val;
                }
            }else{
                if(!(node.val & 1) || node.val <= check[level]){
                    ans = false;
                    return;
                }else{
                    check[level] = node.val;
                }
            }
        }
        traverse(node.right, level + 1);
    }
    return ans;
};