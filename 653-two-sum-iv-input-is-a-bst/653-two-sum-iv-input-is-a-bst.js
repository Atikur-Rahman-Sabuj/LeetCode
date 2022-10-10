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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const v = [];
    tra(root)
    function tra(node){
        if(node === null) return;
        tra(node.left);
        v.push(node.val);
        tra(node.right);
    }
    let l = 0, r = v.length - 1;
    while(l < r){
        let sum = v[l] + v[r]
        if(sum === k){
            return true;
        }
        if(sum < k){
            l++;
        }else{
            r--;
        }
    }
    return false;
};