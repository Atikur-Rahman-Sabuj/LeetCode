/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    const uf = []
    for (let i = 0; i < 26; ++i) uf[i] = i;
    for (const e of equations)
        if (e[1] == '=')
            uf[find(e[0].charCodeAt(0) - 'a'.charCodeAt(0))] = find(e[3].charCodeAt(0) - 'a'.charCodeAt(0));
    
    for (const e of equations)
        if (e[1] == '!' && find(e[0].charCodeAt(0) - 'a'.charCodeAt(0)) == find(e[3].charCodeAt(0) - 'a'.charCodeAt(0)))
            return false;
    return true;
    
    function find(x) {
        if (x != uf[x]) uf[x] = find(uf[x]);
        return uf[x];
    }
};