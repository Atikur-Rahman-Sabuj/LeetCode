/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
    if(node === null) return node;
    const createdNodes = new Map();
    const n = new Node(node.val, []);
    createdNodes.set(n.val, n);
    
    const q = [node];
    
    while(q.length > 0){
        let tempO = q.pop();
        let tempD = createdNodes.get(tempO.val);
        for(const nn of tempO.neighbors){
            if(createdNodes.has(nn.val)){
                tempD.neighbors.push(createdNodes.get(nn.val))
            }else{
                const k = new Node(nn.val, []);
                createdNodes.set(nn.val, k);
                 tempD.neighbors.push(k);
                q.push(nn);
            }
        }
       
    }
     return createdNodes.get(1);
    
};