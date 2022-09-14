/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const h = new MinPriorityQueue({priority: a => a[0]});
    for(const p of points){
        h.enqueue([Math.sqrt(p[0]*p[0] + p[1]*p[1]), p[0], p[1]]);
    }
    const ans = [];
    while(k > 0){
        let t = h.dequeue().element;
        ans.push([t[1], t[2]]);
        k--;
    }
    return ans;
};