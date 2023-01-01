/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    const primes = getPrimes(right);
    let l = -1, r = -1, ans = Infinity
    for(let i = primes.length - 2 ; i >= 0 && primes[i] >= left ; i--){
        if(ans >= primes[i+1] - primes[i]){
            l = primes[i]
            r = primes[i+1]
            ans = primes[i+1] - primes[i]
        }
    }
    return [l, r]
};

function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}