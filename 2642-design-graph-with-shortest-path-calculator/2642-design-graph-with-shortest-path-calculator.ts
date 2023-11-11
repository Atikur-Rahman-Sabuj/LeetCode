class Graph {
    private n: number;
    private graph: Map<number, number[][]> = new Map();

    constructor(n: number, edges: number[][]) {
        this.n = n;
        for (const edge of edges) {
            this.addEdge(edge);
        }
    }

    addEdge(edge: number[]): void {
        const [from, to, edgeCost] = edge;
        this.graph.set(from, (this.graph.get(from) || []).concat([[to, edgeCost]]));
    }

    shortestPath(node1: number, node2: number): number {
        if (node1 == node2) return 0;
        const minTimes: number[] = new Array(this.n + 1).fill(Infinity);
        minTimes[node1] = 0;
        const visited = new Set<number>();
        while (visited.size != this.n) {
            const [source, minTimeToSource] = this.getSourceWithMinTime(minTimes, visited);

            if (minTimeToSource == Infinity) {
                return minTimes[node2] == Infinity ? -1 : minTimes[node2];
            }
            visited.add(source);

            for (const [target, timeToTarget] of (this.graph.get(source) || [])) {
                if (visited.has(target)) {
                    continue;
                }
                const newTimeToTarget = minTimeToSource + timeToTarget;
                const currentTimeToTarget = minTimes[target];

                if (newTimeToTarget < currentTimeToTarget) {
                    minTimes[target] = newTimeToTarget;
                }
            }
        }

        return minTimes[node2];
    }

    private getSourceWithMinTime(minTimes: number[], visited: Set<number>): [number, number] {
        let source = -1;
        let minTime = Infinity;

        for (const [to, edgeCost] of minTimes.entries()) {
            if (visited.has(to)) {
                continue;
            }
            if (edgeCost < minTime) {
                minTime = edgeCost;
                source = to;
            }
        }

        return [source, minTime];
    }
}

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */