class MyCalendar {
    ranges
    constructor() {
        this.ranges = [];
    }

    book(start: number, end: number): boolean {
        // console.log(start, end)
        // console.log(this.ranges);
        let isBookable = false;
        if(this.ranges.length === 0){
             this.ranges.push([start, end]);
            return true;
        }
        if(end <= this.ranges[0][0]){
            this.ranges.unshift([start, end]);
            return true;
        }
        if(start >= this.ranges[this.ranges.length - 1][1]){
            this.ranges.push([start, end]);
            return true;
        }
        for(let i = 0 ; i < this.ranges.length - 1 ; i++){
            if(start >= this.ranges[i][1] && end <= this.ranges[i+1][0]){
                this.ranges.splice(i+1 , 0, [start, end])
                isBookable = true;
                break;
            }
    
        }
        return isBookable;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */