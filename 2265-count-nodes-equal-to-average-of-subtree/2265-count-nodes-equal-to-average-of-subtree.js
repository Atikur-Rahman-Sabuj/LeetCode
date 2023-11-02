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
var averageOfSubtree = function(root) {
    let ans = 0;
    function tr(node){
        let left = [0, 0], right = [0,0];
        if(node.left){
            left = tr(node.left);
        }
        if(node.right){
            right = tr(node.right);
        }
        const val = (left[0] + right[0] + node.val);
        const count = (left[1] + right[1] + 1);
        const average = Math.floor( val / count );
        if(average === node.val) {
            ans++;
        }
        return [val, count];
    }
    tr(root);
    return ans;
};