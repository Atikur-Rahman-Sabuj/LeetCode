class Solution {
    public int maximumRobots(int[] chargeTimes, int[] runningCosts, long budget) {
        int ans = 0, j = -1;
        long s = 0;
        PriorityQueue<int[]> pq = new PriorityQueue<>((o1, o2) -> Integer.compare(o2[0], o1[0]));
        for (int i = 0; i < runningCosts.length; i++) {
            s += runningCosts[i];
            pq.offer(new int[] {chargeTimes[i], i});
            while (s * (i - j) + removeStale(pq, j) > budget)
                s -= runningCosts[++j];
            ans = Math.max(ans, i - j);
        }
        return ans;
    }
    private int removeStale(PriorityQueue<int[]> pq, int j) {
        while (!pq.isEmpty() && pq.peek()[1] <= j) pq.poll();
        if (pq.isEmpty()) return 0;
        return pq.peek()[0];
    }
}