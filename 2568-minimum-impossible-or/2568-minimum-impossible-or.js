/**
 * @param {number[]} A
 * @return {number}
 */
var minImpossibleOR = function(A) {
//     If 1 not in A,
//     we return 1,
//     otherwise we can have x = 1.

//     If 2 not in A,
//     we return 2.
//     otherwise we can have x = 2.

//     Since we can have x = 1 and x = 2,
//     then we can have x = 1 | 2 = 3.

//     If 4 not in A,
//     we return 4,
//     otherwise we have x = 4

//     Since we can have x = 1 and x = 4, then we can have x = 1 | 4 = 5.
//     Since we can have x = 2 and x = 4, then we can have x = 2 | 4 = 6.
//     Since we can have x = 1,2,4, then we can have x = 1 | 2 | 4 = 7.

//     So we can find the rule here,
//     find out the minimum pow of 2,
//     which is not in A
    const s = new Set();
    for (const a of A)
        s.add(a);
    let a = 1;
    while (s.has(a))
        a <<= 1;
    return a;
};