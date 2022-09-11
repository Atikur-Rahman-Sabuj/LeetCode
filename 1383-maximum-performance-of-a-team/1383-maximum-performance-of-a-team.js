/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
    const MODULO = 1e9 + 7;
    const pq = new MinPriorityQueue();
    const arr = Array.from(speed,(s,i)=>[s,efficiency[i]]);
    arr.sort((a,b) => b[1]-a[1]);
    let ans = BigInt(arr[0][0] * arr[0][1]);
    let sum = BigInt(arr[0][0]);
    pq.enqueue(arr[0][0]);
    for(let i = 1 ; i < n ; i++){
        sum += BigInt(arr[i][0]);
        if(pq.size() >= k){
            sum -= BigInt(pq.dequeue().element);
        }
        pq.enqueue(arr[i][0]);
        let res = sum * BigInt(arr[i][1]);
        if(res > ans) ans = res;
    }
    return BigInt(ans) % 1000000007n;
};