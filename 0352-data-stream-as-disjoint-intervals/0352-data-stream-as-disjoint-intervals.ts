class SummaryRanges {
    m;
    min = 1000000;
    max = -1;
    constructor() {
        this.m = new Map();
    }

    addNum(value: number): void {
        if(this.m.has(value)) return;
        
        this.min = Math.min(this.min, value);
        this.max = Math.max(this.max, value);
        
        let start = value;
        let end = value;
        
        if(this.m.has(value-1) && this.m.has(value+1)){
            start = this.m.get(value-1)[0];
            end = this.m.get(value+1)[1];
        }
        else if(this.m.has(value - 1)){
            start = this.m.get(value-1)[0];
            end = value;
        }
        else if(this.m.has(value + 1)){
            start = value;
            end = this.m.get(value + 1)[1];
        }
        
        for(let i = start ; i <= end ; i++){
            this.m.set(i, [start, end]);
        }
    }

    getIntervals(): number[][] {
        const res = [];
        let i = this.min;
        while(i <= this.max){
            
            const temp = this.m.get(i);
            if(!temp){
                i++;
                continue;
            }
            res.push(temp);
            i = temp[1]+1;
        }
        return res;
    }
}

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */