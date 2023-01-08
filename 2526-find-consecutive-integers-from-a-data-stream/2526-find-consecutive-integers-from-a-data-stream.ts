class DataStream {
    value;
    k;
    numbers;
    nonEqual;
    
    constructor(value: number, k: number) {
        this.value = value;
        this.k = k;
        this.numbers = new Array()
        this.nonEqual = 0;
    }

    consec(num: number): boolean {
        this.numbers.push(num);
        if(num !== this.value) this.nonEqual++;
        if(this.numbers.length < this.k){
            return false;
        }else{
            if(this.nonEqual === 0){
                return true;
            }
            if(this.numbers[this.numbers.length - this.k] !== this.value) this.nonEqual--;
            return false;
        }
    }
}

/**
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */