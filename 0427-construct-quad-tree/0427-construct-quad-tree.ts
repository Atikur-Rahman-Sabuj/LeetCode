/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */

function construct(grid: number[][]): Node | null {
    const n = grid.length;
    return find(0, 0, n-1, n-1)
    function find(sx, sy, ex, ey){
        //console.log(sx, sy, ex, ey)
        if(sx == ex) return new Node(!!grid[sx][sy], true);
        const tl = find(sx, sy, Math.floor((ex+sx)/2), Math.floor((ey+sy)/2))
        const bl = find(Math.ceil((ex+sx)/2), sy, ex, Math.floor((ey+sy)/2))
        const tr = find(sx, Math.ceil((ey+sy)/2), Math.floor((ex+sx)/2), ey)
        const br = find(Math.ceil((ex+sx)/2), Math.ceil((ey+sy)/2), ex, ey)
        if(sameNodes(tl, bl, tr, br)){
            return tl;
        }else{
            return new Node(true, false, tl, tr, bl, br)
        }
        
    }
    
    function sameNodes(n1, n2, n3, n4){
        if(!n1.isLeaf || !n2.isLeaf || !n3.isLeaf || !n4.isLeaf){
            return false;
        }
        let val = n1.val
        if(val !== n2.val || val !== n3.val || val != n4.val){
            return false;
        }
        return true;
    }
};