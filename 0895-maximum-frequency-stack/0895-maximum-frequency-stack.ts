class FreqStack {
    freq;
    m;
    maxFreq;
    constructor() {
        this.m = new Map();
        this.freq = new Map();
        this.maxFreq = 0;
    }

    push(val: number): void {
        this.freq.set(val, this.freq.has(val)?this.freq.get(val) + 1 : 1)
        this.maxFreq = Math.max(this.maxFreq, this.freq.get(val));
        if(this.m.has(this.freq.get(val))){
            this.m.get(this.freq.get(val)).push(val);
        }else{
            this.m.set(this.freq.get(val), [val]);
        }
    }

    pop(): number {
       const val = this.m.get(this.maxFreq).pop();
        if(this.m.get(this.maxFreq).length === 0){
            this.maxFreq--;
        }
        this.freq.set(val, this.freq.get(val) - 1);
        return val;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */