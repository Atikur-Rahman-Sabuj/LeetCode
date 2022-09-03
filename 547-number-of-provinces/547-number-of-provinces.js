/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    let visited = new Array(n).fill(0);
    let pq = [];
    let ans = 0;
    for(let i = 0 ; i < n ; i++){
        if(visited[i] === 0){
            ans++;
            pq = [i];
            while(pq.length > 0){
                let temp = pq.pop();
                visited[temp] = 1;
                for(let j = 0 ; j < n ; j++){
                    if(isConnected[temp][j] && !visited[j]){
                        pq.push(j);
                    }
                }
            }
        }
    }
    return ans;
};