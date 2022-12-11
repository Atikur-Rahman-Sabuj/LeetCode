class Allocator {
    mp;
    ma;
    size;
    constructor(n: number) {
        this.size = n;
        this.mp = new Map();
        this.ma = new Map();;
    }

    allocate(size: number, mID: number): number {
        let start = -1;
        let rSize = 0;
        for(let i = 0 ; i < this.size ; i++){
            if(this.ma.has(i)){
                start = -1;
                rSize = 0;
                i = this.ma.get(i);
            }else{
                if(start === -1){
                    start = i;
                }
                rSize++;
            }
            
            if(rSize === size){
                this.ma.set(start, i);
                if(this.mp.has(mID)){
                    this.mp.get(mID).push([start, i]);
                }else{
                    this.mp.set(mID , [[start, i]]);
                }
                return start;
            }
        }
        return -1;
    }

    free(mID: number): number {
        let sum = 0;
        if(this.mp.has(mID))
        for(const indices of this.mp.get(mID)){
            this.ma.delete(indices[0]);
            sum += indices[1] - indices[0] + 1;
        }
        this.mp.delete(mID);
        return sum;
    }
}

/**
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.free(mID)
 */
//[null, 0, 1, 2, 1, 3, 1, 6, 3, -1, 0]