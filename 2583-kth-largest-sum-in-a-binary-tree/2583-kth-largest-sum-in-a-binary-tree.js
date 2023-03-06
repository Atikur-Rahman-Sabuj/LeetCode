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
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    let sums = new MaxPriorityQueue();
    const q = [root];
    while(q.length){
        let n = q.length;
        let sum = 0;
        for(let i = 0 ; i < n ; i++){
            let node = q.shift();
            sum += node.val
            if(node.left){
                q.push(node.left)
            }
            if(node.right){
                q.push(node.right)
            }
        }
        sums.enqueue(sum);
    }
    if(sums.size() < k) return -1;
    k--;
    while(k--){
        sums.dequeue();
    }
    return sums.dequeue().element
};