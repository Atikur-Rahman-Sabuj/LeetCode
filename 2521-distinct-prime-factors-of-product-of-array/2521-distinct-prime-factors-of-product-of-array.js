/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function(nums) {
    const s = new Set();
    for(const num of nums){
        let factors = primFact(num);
        //console.log(factors);
        for(const fact of factors){
            s.add(fact);
        }
    }
    return s.size
};


function primFact(num) {
  var factors = [];
  
  /* since 2 is the only even prime, it's easier to factor it out 
   * separately from the odd factor loop (for loop doesn't need to 
   * check whether or not to add 1 or 2 to f).
   * The condition is essentially checking if the number is even 
   * (bitwise "&" operator compares the bits of 2 numbers in binary  
   * and outputs a binary number with 1's where their digits are the 
   * same and 0's where they differ. In this case it only checks if 
   * the final digit for num in binary is 1, which would mean the 
   * number is odd, in which case the output would be 1, which is 
   * interpreted as true, otherwise the output will be 0, which is 
   * interpreted as false. "!" returns the opposite boolean, so this 
   * means that '!(num & 1)' is true when the num is not odd)
   */
  while (!(num & 1)) {  
    factors.push(2);
    num /= 2;
  }
  
  // 'f*f <= num' is faster than 'f <= Math.sqrt(num)'
  for (var f = 3; f*f <= num; f += 2) {
    while (!(num % f)) { // remainder of 'num / f' isn't 0
      factors.push(f);
      num /= f;
    }
  }
  
  /* if the number is already prime, then this adds it to factors so
   * an empty array isn't returned
   */
  if (num != 1) {
    factors.push(num);
  }
  return factors;
}