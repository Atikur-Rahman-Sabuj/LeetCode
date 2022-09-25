const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };
const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
function DJSet(n) {
    // parent[i] < 0, -parent[i] is the group size which root is i. example: (i -> parent[i] -> parent[parent[i]] -> parent[parent[parent[i]]] ...)
    // parent[i] >= 0, i is not the root and parent[i] is i's parent. example: (... parent[parent[parent[i]]] -> parent[parent[i]] -> parent[i] -> i)
    let parent = Array(n).fill(-1);
    return { find, union, count, equiv, par }
    function find(x) {
        return parent[x] < 0 ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x == y) return false;
        if (parent[x] < parent[y]) [x, y] = [y, x];
        parent[x] += parent[y];
        parent[y] = x;
        return true;
    }
    function count() { // total groups
        return parent.filter(v => v < 0).length;
    }
    function equiv(x, y) { // isConnected
        return find(x) == find(y);
    }
    function par() {
        return parent;
    }
}
const stmkey_in = (m) => new Map([...m].sort((x, y) => x[0] - y[0]));
const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);

const numberOfGoodPaths = (a, edges) => {
    let n = a.length, g = initializeGraph(n), ds = new DJSet(n), res = 0, vis = Array(n).fill(false);
    packUG(g, edges);
    let d = new Map();
    for (let i = 0; i < n; i++) {
        if (!d.has(a[i])) d.set(a[i], []);
        d.get(a[i]).push(i);
    }
    d = stmkey_in(d);
    for (const [, A] of d) {
        for (const cur of A) {
            vis[cur] = true;
            for (const child of g[cur]) {
                if (vis[child]) ds.union(child, cur);
            }
        }
        let f = new Map();
        for (const cur of A) addOneOrManyMap(f, ds.find(cur))
        for (const [, x] of f) res += x * (x + 1) / 2;
    }
    return res;
};