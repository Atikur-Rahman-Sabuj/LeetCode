class MyCalendarThree {
    q: Array<[number, number]>

    constructor() {
        this.q = []
    }

    book(start: number, end: number): number {
        this.q.push([start, 1])
        this.q.push([end, -1]) 
        this.q.sort((a,b) => {
            if ( a[0] === b[0] ) return a[1] < b[1] ? -1 : 1
            return a[0] < b[0] ? -1 : 1
        })
        let ret = 0
        let count = 0
        for ( let i=0;i<this.q.length;++i ) {
            count += this.q[i][1]
            ret = Math.max(ret, count)
        }
        return ret
    }
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */