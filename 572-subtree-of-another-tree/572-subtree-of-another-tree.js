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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let ans = [];
    let i = -1;
    function find(node, subNode, index){
        if(index >= 0){
            //console.log(node, subNode)
            if(node === null && subNode === null) return;
            if(node === null || subNode === null){
                ans[index] = false;
                return;
            }
            ans[index] = ans[index] && node.val === subNode.val;
            find(node.left, subNode.left, index)
            find(node.right, subNode.right, index);
        }else{
            if(node === null) return;
            if(node.val === subRoot.val){
                i++;
                ans[i] = true;
                find(node.left, subRoot.left, i);
                find(node.right, subRoot.right, i);
            }
            find(node.left, subRoot, -1);
            find(node.right, subRoot, -1);

        }
    }
    find(root, subRoot, -1);
    return ans.some(a => a);
};