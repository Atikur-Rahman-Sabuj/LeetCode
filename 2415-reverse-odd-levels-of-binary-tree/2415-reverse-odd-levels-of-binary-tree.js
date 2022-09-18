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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    let q = [root];
    let reverse = false;
    while(q.length > 0){
        let r = q.length;
        if(reverse){
            for(let i = 0 ; i < Math.floor(r/2) ; i++){
                let t = q[i].val;
                q[i].val = q[r-1-i].val;
                q[r-1-i].val = t;
            }
        }
        reverse = !reverse;
        if(q[0].left === null) break;
        while(r--){
            let temp = q.shift();
            q.push(temp.left);
            q.push(temp.right);
            
        }
    }
    
    return root;
};