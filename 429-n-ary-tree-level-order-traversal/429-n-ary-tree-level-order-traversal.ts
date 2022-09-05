/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function levelOrder(root: Node | null): number[][] {
	const ans = [];
    if(root === null) return [];
    let queue = [root];
    let k = 0;
    while(queue.length > 0){
        let n = queue.length;
        ans[k] = [];
        for(let i = 0 ; i < n ;i++){
            const temp = queue.pop();
            ans[k].push(temp.val);
            for(const node of temp.children){
                queue.unshift(node);
            }
        }
        k++;
    }
    
    return ans;
};