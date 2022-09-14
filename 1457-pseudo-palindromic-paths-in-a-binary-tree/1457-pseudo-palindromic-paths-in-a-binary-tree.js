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
var pseudoPalindromicPaths  = function(root) {
    const freq = new Array(10).fill(0);
    let ans = 0;
    
    traverse(root);
    
    function traverse(node){
        if(node === null) return;
        freq[node.val]++;
        if(node.left === null && node.right === null){
            let oddC = 0;
            freq.forEach(f=>{
                if(f&1){
                    oddC++;
                }
            })
            if(oddC <= 1){
                ans++;
            }
        }else{
            traverse(node.left);
            traverse(node.right);
        }
        freq[node.val]--;
    }
    return ans;
};