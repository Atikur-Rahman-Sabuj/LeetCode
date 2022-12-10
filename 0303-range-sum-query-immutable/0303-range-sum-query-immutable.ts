class NumArray {
    runningSums:number[]
    constructor(nums: number[]) {
        this.runningSums = [nums[0]];
        for(let i = 1 ; i < nums.length ; i++){
            this.runningSums[i] = nums[i] + this.runningSums[i-1];
        }
    }

    sumRange(left: number, right: number): number {
        return this.runningSums[right] - (left === 0 ? 0 : this.runningSums[left-1]);
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */