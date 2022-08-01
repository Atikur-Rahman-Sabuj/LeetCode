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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let total = 0;
    function find(node, sumArray){
        if(node === null) return;
        const newSum = sumArray[sumArray.length - 1] + node.val;
        sumArray.forEach(item=>{
            if((newSum - item) === targetSum)total++;
        })
        find(node.left , [...sumArray, newSum]);
        find(node.right, [...sumArray, newSum]);
    }
    find(root, [0]);
    return total;
};