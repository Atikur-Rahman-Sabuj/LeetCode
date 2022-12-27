/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const ans = [];
    const arr = [];
    const find = (index) => {
      if (arr.length === k) ans.push([...arr]);
      for (let i = index; i <= n; i++) {
        arr.push(i);
        find(i+1)
        arr.pop();
      }
    };
    find(1);
    return ans;
};