class SmallestInfiniteSet {
    numbers;
    constructor() {
        this.numbers = new Array(10001).fill(1)
    }

    popSmallest(): number {
        for(let i = 1 ; i <= 1000 ; i++){
            if(this.numbers[i] === 1){
                this.numbers[i] = 0;
                return i;
            }
        }
    }

    addBack(num: number): void {
        this.numbers[num] = 1;
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */