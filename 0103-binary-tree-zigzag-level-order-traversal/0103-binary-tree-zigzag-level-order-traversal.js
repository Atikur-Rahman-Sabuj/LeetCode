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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let p = [root];
    let ans = [];
    let flag = true;
    while(p.length > 0){
        //console.log(p, flag)
        let t = p.length;
        let pp = [];
        const tans = [];
        while(t--){
            //let temp = flag ? p.pop() : p.shift();
            temp = p.pop();
            tans.push(temp.val);
            if(flag){
                if(temp.left){
                    pp.push(temp.left)
                }
                if(temp.right){
                    pp.push(temp.right)
                }
            }else{
                if(temp.right){
                    pp.push(temp.right)
                }
                if(temp.left){
                    pp.push(temp.left)
                }
            }

        }
        flag = !flag
        p = pp;
        ans.push(tans)
    }
    return ans;
};