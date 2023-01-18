function maxSubarraySumCircular(nums: number[]): number {
    let result = nums[0],
      sum = nums[0],
      minSum = nums[0],
      minResult = nums[0],
      allSum = nums[0],
      minNum = nums[0];
   for (let index = 1; index < nums.length; index++) {
      sum = Math.max(sum + nums[index], nums[index]);
      result = Math.max(result, sum);

      minSum = Math.min(minSum + nums[index], nums[index]);
      minResult = Math.min(minResult, minSum);
      

      allSum += nums[index];

      minNum = Math.min(minNum, nums[index]);
   }
   if (minResult === allSum) {
      minResult -= minNum;
   }
   return Math.max(result, allSum - minResult);
};