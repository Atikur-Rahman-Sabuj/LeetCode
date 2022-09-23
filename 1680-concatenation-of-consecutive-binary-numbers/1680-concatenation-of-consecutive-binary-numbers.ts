function concatenatedBinary(n: number): number {
    const MODULO = 1e9 + 7;
    let num = 0;
    
    for(let i = 1; i <= n; i++) {
        //OR num *= (1 << i.toString(2).length)
        num *= (2 ** i.toString(2).length) 
        num += i;
        num %= MODULO
    }
    return num;
};