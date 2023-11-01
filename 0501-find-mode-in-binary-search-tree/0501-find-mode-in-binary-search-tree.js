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
 * @return {number[]}
 */
var findMode = function(root) {
    let last = -1
    let count = 0
    let max = 0
    let res = []
    
    search(root)
    return res
    
    function search(node){
        if(!node) return
        
        search(node.left)
        
        if(node.val !== last){
            last = node.val
            count = 1
            if(count>max) res.push(node.val)
        } else {
            count++
            if(count=== max) res.push(node.val)
            else if(count>max){
                max = count
                res = [node.val]
            }
        }
        
        search(node.right)
    }
};