/**
 * @param {number} n
 * @return {number}
 */
var monkeyMove = function(n) {
  const mod = BigInt(10 ** 9 + 7);
  let [base, res] = [2n, 1n];
  while (n > 0) {
    if (n % 2) res = (res * base) % mod;
    base = (base * base) % mod;
    n >>= 1;
  }
  return Number((res - 2n + mod) % mod);
};

