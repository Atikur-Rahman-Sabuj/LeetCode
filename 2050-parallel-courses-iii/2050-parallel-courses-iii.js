/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function(n, relations, time) {
    let graph = {};
    let in_degree = Array(n + 1).fill(0);
    for (let relation of relations) {
        if (!graph[relation[0]]) {
            graph[relation[0]] = [];
        }
        graph[relation[0]].push(relation[1]);
        in_degree[relation[1]]++;
    }

    let dist = [0].concat(time);
    let queue = [];
    for (let i = 1; i <= n; i++) {
        if (in_degree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length) {
        let course = queue.shift();
        if (graph[course]) {
            for (let next_course of graph[course]) {
                dist[next_course] = Math.max(dist[next_course], dist[course] + time[next_course - 1]);
                in_degree[next_course]--;
                if (in_degree[next_course] === 0) {
                    queue.push(next_course);
                }
            }
        }
    }

    return Math.max(...dist);
    
};