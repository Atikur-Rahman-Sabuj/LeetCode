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
var averageOfLevels = function(root) {
    const q = [root];
    const ans = [];
    while(q.length){
        const currLength = q.length;
        let sum = 0;
        for(let i = 0 ; i < currLength ; i++){
            let temp = q.pop();
            sum += temp.val;
            if(temp.left) q.unshift(temp.left);
            if(temp.right) q.unshift(temp.right);
        }
        ans.push(sum/currLength);
    }
    return ans;
};