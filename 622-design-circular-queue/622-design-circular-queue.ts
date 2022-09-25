class MyCircularQueue {
    q:number[]
    maxSize:number;
    constructor(k: number) {
        this.q = [];
        this.maxSize = k;
    }

    enQueue(value: number): boolean {
        if(this.q.length < this.maxSize){
            this.q.push(value);
            return true;
        }
        return false;
    }

    deQueue(): boolean {
        if(this.q.length > 0){
            this.q.shift();
            return true;
        }else{
            return false;
        }
    }

    Front(): number {
        if(this.q.length > 0){
            return this.q[0]
        }else{
            return -1;
        }
    }

    Rear(): number {
        if(this.q.length > 0){
            return this.q[this.q.length - 1]
        }else{
            return -1;
        }
    }

    isEmpty(): boolean {
        return this.q.length === 0;
    }

    isFull(): boolean {
        return this.q.length === this.maxSize;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */