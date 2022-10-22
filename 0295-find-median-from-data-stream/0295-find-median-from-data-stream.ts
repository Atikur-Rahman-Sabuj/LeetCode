class MedianFinder {
    maxPQ;
    minPQ;
    total;
    constructor() {
        this.maxPQ = new MaxPriorityQueue({priority: a => a});
        this.minPQ = new MinPriorityQueue({priority: a => a});
        this.total = 0;
    }

    addNum(num: number): void {
        this.total++;
        if(this.total === 1){
            this.minPQ.enqueue(num); return;
        }
        if(this.minPQ.front().element < num){
            this.minPQ.enqueue(num);
            console.log(this.minPQ.size(), this.maxPQ.size())
            if(this.minPQ.size() - this.maxPQ.size() > 1){
                this.maxPQ.enqueue(this.minPQ.dequeue().element);
            }  
        }else{
            this.maxPQ.enqueue(num);
            if(this.maxPQ.size() - this.minPQ.size() > 0){
                this.minPQ.enqueue(this.maxPQ.dequeue().element);
            }
        }
        
    }

    findMedian(): number {
        if(this.total & 1){
            return this.minPQ.front().element;
        }else{
            return (this.minPQ.front().element + this.maxPQ.front().element) / 2;
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */