class MyStack {
    arr:Array<number>
    constructor() {
        this.arr = []
    }

    push(x: number): void {
        this.arr.push(x)
    }

    pop(): number {
        return this.arr.pop()
    }

    top(): number {
        return this.arr[this.arr.length - 1]
    }

    empty(): boolean {
        return this.arr.length == 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */