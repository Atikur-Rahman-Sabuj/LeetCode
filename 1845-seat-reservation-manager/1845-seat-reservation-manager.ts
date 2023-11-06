class SeatManager {
    m;
    constructor(n: number) {
        this.m = new MinPriorityQueue();
        for(let i = 1 ; i <= n ; i++){
            this.m.enqueue(i);
        }
    }

    reserve(): number {
        const l = this.m.dequeue();
        return l.element;
    }

    unreserve(seatNumber: number): void {
        this.m.enqueue(seatNumber);
    }
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */