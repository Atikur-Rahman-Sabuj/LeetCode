/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const carr = arr.map(num => [num, countSetBits(num)]);
    carr.sort((a,b)=> a[1]-b[1] || a[0]-b[0])
    return carr.map(a => a[0])
};
                         
function countSetBits(n)
   {
     var count = 0;
     while (n)
     {
       count += n & 1;
       n >>= 1;
     }
     return count;
   }